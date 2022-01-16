module.exports = {


    friendlyName: 'Delete',
  
  
    description: 'Delete a bra entry.',
  
  
    inputs: {
      id: {
        description: 'The id of the bra.',
        type: 'number',
        required: true
      },
    },
  
  
    exits: {
    },
  
  
    fn: async function (inputs) {
      sails.log.debug("Delete bra entry: " + inputs.id)

      let bra = await Bra.destroyOne({id: inputs.id});
      if (bra) {
         return "Deleted: "+bra; 
      } else {
        return "Can not delete: "+inputs.id;
      };
    }
  };
  