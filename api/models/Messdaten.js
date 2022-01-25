module.exports = {
  attributes: {
    unterbrustbreite: { type: 'number', columnType: 'DECIMAL (6,2)', required: true },
    brustumfang: { type: 'number', columnType: 'DECIMAL (6,2)', required: true  },
    owner:{
      model:'user',
      unique: true
    },
  },
};
