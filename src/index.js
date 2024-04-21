import Exporter from './exporter';
import createTemplate from './template';

export { Exporter };

export async function AnkiExport(deckName, template) {
  const initSqlJs = require('sql.js');
  const sql = await initSqlJs();

  return new Exporter(deckName, {
    template: createTemplate(template),
    sql
  });
}
