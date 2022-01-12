module.exports = {
        attributes: {
            id: { type: 'number', required: true, unique: true },
            name: { type: 'string', columnType: 'varchar(80)', required: true},
            users: { collection: 'user', via: 'komfort'},

      },
  };
