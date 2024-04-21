'use strict';

const fs = require('fs');
const path = require('path');
const { AnkiExport } = require('../../dist');

async function run() {
// const { default: AnkiExport } = require('anki-apkg-export');

  const apkg = await AnkiExport('deck-name-node', {
    questionFormat: fs.readFileSync('./question.html').toString(), // '{{Front}}  <script>document.querySelectorAll(".prettify-tags > *")</script>',
    answerFormat: '{{FrontSide}}\n\n<hr id="answer">\n\n{{Back}}'
  });

  apkg.addMedia('anki.png', fs.readFileSync(path.resolve('../assets/anki.png')));

  apkg.addCard('card #1 front', 'card #1 back');
  apkg.addCard('card #2 front', 'card #2 back');
  apkg.addCard('card #3 with image <img src="anki.png" />', 'card #3 back');

  apkg
    .save()
    .then(zip => {
      fs.writeFileSync('./output.apkg', zip, 'binary');
      console.log(`Package has been generated: output.apkg`);
    })
    .catch(err => console.log(err.stack || err));
}

run()
