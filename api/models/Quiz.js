module.exports = {
    attributes: {
        unterbrustbreite: { type: 'number', columnType: 'DECIMAL (6,2)', required: true },
        brustumfang: { type: 'number', columnType: 'DECIMAL (6,2)' },
        passformdaten: { type: 'string',  columnType: 'varchar(80)'},
        persoenlicheAngaben: { type: 'string',  columnType: 'varchar(80)'},
        owner:{
          model:'user',
          unique: true
        }
      },
  };


  //Stil, Farbe als Attribute noch ergänzen