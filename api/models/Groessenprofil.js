module.exports = {
    attributes: {
        unterbrustbreite: { type: 'number', columnType: 'DECIMAL (3,2)', required: true },
        brustumgang: { type: 'number', columnType: 'DECIMAL (3,2)' },
        passformdaten: { type: 'string',  columnType: 'varchar(80)',  required: true},
        persoenlicheAngaben: { type: 'string',  columnType: 'varchar(80)',  required: true},
        owner:{
          model:'user',
          unique: true
        }
      },
  };