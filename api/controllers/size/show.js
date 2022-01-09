module.exports = {


    friendlyName: 'Show',
  
  
    description: 'Show quiz options in BraTragekomfort.',
  
  
    inputs: {
  
    },
  
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/size/quiz'
      },
    },
  
    fn: async function (inputs) {
      sails.log("Controller called for getting options in BraTragekomfort:")
      let optionen = await BraTragekomfort.find();
      sails.log.debug("Query result for all options in BraTragekomfort")
      sails.log.debug(optionen)
      return ( { optionen: optionen } );
    }
  };
  