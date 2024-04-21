# anki-apkg-export

> ⚠️ fork自 [anki-apkg-export](https://github.com/repeat-space/anki-apkg-export#readme), 更新了依赖版本

## Install

```bash
$ npm install @gxr1020/anki-apkg-export --save
```

## Usage

### server

```js
const fs = require('fs');
const { AnkiExport } = require('@gxr1020/anki-apkg-export')

const apkg = await AnkiExport('deck-name');

apkg.addMedia('anki.png', fs.readFileSync('anki.png'));

apkg.addCard('card #1 front', 'card #1 back');
apkg.addCard('card #2 front', 'card #2 back', { tags: ['nice', 'better card'] });
apkg.addCard('card #3 with image <img src="anki.png" />', 'card #3 back');

apkg
  .save()
  .then(zip => {
    fs.writeFileSync('./output.apkg', zip, 'binary');
    console.log(`Package has been generated: output.pkg`);
  })
  .catch(err => console.log(err.stack || err));
```

## Examples

- [server from above](examples/server)
