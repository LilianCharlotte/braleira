module.exports = {
    attributes: {
        cupBreite: { type: 'number', columnType: 'integer', required: true },
        traegerbreite: { type: 'string', columnType: 'varchar(80)' },
        schalendicke: { type: 'string',  columnType: 'varchar(80)',  required: true},
        bh_buegel: { type: 'string',  columnType: 'varchar(80)',  required: true},
        unterbrustbandhalt: { type: 'string',  columnType: 'varchar(80)',  required: true},
        push_up: { type: 'boolean',  columnType: 'varchar(80)',  required: true},
        cupPosition: { type: 'string',  columnType: 'varchar(80)',  required: true},
        staebchen: { type: 'boolean',  required: true},
        beschreibung: { type: 'string',  columnType: 'varchar(300)',  required: true},
        mittelsteg: { type: 'string',  columnType: 'varchar(80)',  required: true},
        verschlussart: { type: 'string',  columnType: 'varchar(80)',  required: true},
        cupGroesse: { type: 'string',  columnType: 'varchar(80)',  required: true},
        schalenfuelle: { type: 'string',  columnType: 'varchar(300)',  required: true},
    
        bh: {
          collection:'bh',
          via: 'pf_bewertung'
          }
      },
  };