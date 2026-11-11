"""Create web-sized copies from the explicitly curated source list; never edit originals."""
from pathlib import Path
from PIL import Image, ImageOps
import io
import json
import argparse

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/photos'
OUT.mkdir(parents=True,exist_ok=True)

def open_photo(source):
    if source.suffix.lower() in {'.nef','.cr2','.arw','.dng'}:
        import rawpy
        with rawpy.imread(str(source)) as raw:
            return Image.fromarray(raw.postprocess(use_camera_wb=True, half_size=True))
    if source.suffix.lower() in {'.heic','.heif'}:
        import pillow_heif
        pillow_heif.register_heif_opener()
    return Image.open(source)

def prepare(manifest):
    records=json.loads(manifest.read_text(encoding='utf-8'))
    photos=[]
    for item in records:
        if not item['include']:
            continue
        source=Path(item['source'])
        if not source.is_absolute(): source=ROOT/source
        pid=item['id']
        with open_photo(source) as original:
            exif=original.getexif()
            try:
                exif_detail=exif.get_ifd(34665)
            except (KeyError,TypeError):
                exif_detail={}
            date=str(exif_detail.get(36867,exif.get(306,''))).strip()
            camera=' '.join(str(exif.get(k,'')).strip() for k in [271,272]).strip()
            im=ImageOps.exif_transpose(original).convert('RGB')
            width,height=im.size
            for label,size,quality in [('space',360,76),('thumb',720,80),('view',2560,88)]:
                dest=OUT/f'{pid}-{label}.webp'
                if not dest.exists():
                    copy=im.copy()
                    copy.thumbnail((size,size),Image.Resampling.LANCZOS)
                    copy.save(dest,'WEBP',quality=quality,method=4)
            photos.append({'id':pid,'title':item['title'],'category':item['category'],
                'filename':source.name,'width':width,'height':height,'camera':camera,
                'date':date[:10].replace(':','-') if len(date)>=10 else '',
                'space':f'/photos/{pid}-space.webp','thumb':f'/photos/{pid}-thumb.webp','src':f'/photos/{pid}-view.webp',
                'featured':item.get('featured',False),
                'status':item.get('status','finished'),
                'editNote':item.get('editNote',''),
                'selectionNote':item.get('selectionNote','')})
    (ROOT/'public/photos.json').write_text(json.dumps(photos,ensure_ascii=False,indent=2),encoding='utf-8')
    print(f'Prepared {len(photos)} photographs. Excluded {len(records)-len(photos)}.')

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--manifest', type=Path, default=ROOT/'tools/curation.json')
    args=parser.parse_args()
    prepare(args.manifest)
