module.exports = {
    attributes: {
        marke: { type: 'string', columnType: 'varchar (80)', required: true },
        modell: { type: 'string', columnType: 'varchar(80)' },
        form: { type: 'string',  columnType: 'varchar(80)',  required: true},
        groesse: { type: 'string',  columnType: 'varchar(80)',  required: true},
        stil: { type: 'string',  columnType: 'varchar(80)',  required: true},
        farbe: { type: 'string',  columnType: 'varchar(80)',  required: true},
        muster: { type: 'string',  columnType: 'varchar(80)',  required: true},
        sternebewertung: { type: 'string',  columnType: 'varchar(80)',  required: true},
        shoppingLink: { type: 'string',  columnType: 'varchar(300)',  required: true},
        owner: {
          collection: 'user',
          via:'bh'
        },
        pf_bewertung:{
          model:'passformbewertungsprofil',
          unique: true
      }
  } 

}
