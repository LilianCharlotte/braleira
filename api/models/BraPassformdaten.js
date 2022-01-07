module.exports = {
    attributes: {
        groesse: {type: 'number',  columnType: 'DECIMAL (6,2)', required: true },
        cup: { type: 'string',  columnType: 'varchar(80)', required: true},
        owner:{
          model:'user',
          unique: true
        }
      },
  };
