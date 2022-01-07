module.exports = {
    attributes: {
        marke: { type: 'string', columnType: 'varchar (200)'},
        model: { type: 'string', columnType: 'varchar(200)' },
        form: { type: 'string',  columnType: 'varchar(80)'},
        groesse: { type: 'string',  columnType: 'varchar(80)'},
        stil: { type: 'string',  columnType: 'varchar(80)'},
        farbe: { type: 'string',  columnType: 'varchar(80)'},
        muster: { type: 'string',  columnType: 'varchar(80)'},
        sternebewertung: { type: 'string',  columnType: 'varchar(80)'},
        shoppingLink: { type: 'string',  columnType: 'varchar(300)'},
        owner: {
          collection: 'user',
          via:'bra'
        }
  } 

}
