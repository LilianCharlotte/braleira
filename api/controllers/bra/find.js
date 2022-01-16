module.exports = {


    friendlyName: 'Find',
  
  
    description: 'Find bra entry.',
  
  
    inputs: {
      wert : {
        type: 'string',
      },
      filterNach: {
        type: 'string',
        required: true,
      }

    },

    exits: {

    },
  
    fn: async function (inputs) {
      if (!inputs.wert) {
          return Bra.find();
      }

      const suche = {};
      suche[inputs.filterNach] = { contains: inputs.wert };
      return Bra.find(suche);
    }
  };
  
  