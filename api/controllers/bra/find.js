module.exports = {


    friendlyName: 'Find',
  
  
    description: 'Find bra entry.',
  
  
    inputs: {
      farbe : {
        type: 'string'
      },
      stoff : {
        type: 'string'
      },
    },

    exits: {

    },
  
    fn: async function (inputs) {
      return Bra.find({ farbe: inputs.farbe, stoff: inputs.stoff });
    }
  };
  
  