module.exports = {

    //Test

    friendlyName: 'Create new bra',


    description: 'Create new bra entry.',


    inputs: {

        model: {
            description: 'Name des BH-Models',
            type: 'string',
            required: true
        },

        marke: {
            description: 'Markenname des BHs',
            type: 'string',
            required: true
        },

    },


    exits: {

        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/bra/done',
            description: 'Es wurde erfolgreich ein neuer Eintrag angelegt. '
        },

    },


    // fn: async function ({bhModel, bhMarke}) {

    //     return {};

 //Start building the values to set in the db.
    // (We always set the fullName if provided.)
    // var valuesToSet = {
    //     bhModel,
    //     bhMarke
    //   };



    // }
    fn: async function (inputs) {
        sails.log.debug("Create new bra....")
        let bra = await Bra.create(inputs).fetch();
        sails.log.debug("New bra....")
        sails.log.debug(bra)
        if (!bra) { throw 'notFound'; }
        return {
          message: "Successfully created.",
          bra: bra
        };
      }
    
    
    

   


};

