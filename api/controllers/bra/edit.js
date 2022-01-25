module.exports = {

  friendlyName: 'Edit a bra',

  description: 'Edits a bra',

  inputs: {
    id: {
      type: 'number',
      required: true,
    }
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/bra/update',
      description: 'Display the admin page for authenticated users.'
    },
  },

  fn: async function (inputs) {
    let bra = await Bra.findOne({ id: inputs.id });
    if (!bra) { throw 'notFound'; }
    return {
      bra: bra
    };
  }

};
