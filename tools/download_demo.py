"""Download only the three photographs already published in the public portfolio."""
from pathlib import Path
import json, urllib.request
ROOT=Path(__file__).resolve().parents[1]
manifest=json.loads((ROOT/'tools/curation.example.json').read_text(encoding='utf8'))
for item in json.loads((ROOT/'tools/demo-sources.json').read_text(encoding='utf8')):
    target=ROOT/next(row['source'] for row in manifest if row['id']==item['id'])
    target.parent.mkdir(parents=True,exist_ok=True)
    with urllib.request.urlopen(item['url'],timeout=60) as response, target.open('wb') as output:
        __import__('shutil').copyfileobj(response,output)
    print('Downloaded',item['id'])
