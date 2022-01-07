module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true},
        users: { collection: 'user', via: 'bhmuster'},

  },
};