const Groessenprofil = require("../../models/Groessenprofil");

module.exports = {

    //Test

    friendlyName: 'Create the quiz',


    description: 'Create a quiz entry.',
  
    inputs: {

        unterbrustbreite: {
            description: 'Unterbrustbreite',
            type: 'string',
            required: true
        },

        brustumfang: {
            description: 'Markenname des BHs',
            type: 'string',
            required: true
        },

        passformdaten: {
            description: 'Form des BHs',
            type: 'string',
            required: true
        },

        persoenlicheAngaben: {
            description: 'Größe des BHs',
            type: 'string',
            required: true
        },

       /*  stil: {
            description: 'BH Stil',
            type: 'string',
            required: true
        },

        farbe: {
            description: 'Farbe des BHs',
            type: 'string',
            required: true
        },

        muster: {
            description: 'Muster des BHs',
            type: 'string',
            required: true
        }, */


    },


    exits: {

        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/size/done',
            description: 'Es wurde erfolgreich ein neuer Eintrag angelegt. '
        },

    },


    fn: async function (inputs) {
        sails.log.debug("quiz...")
        let size = await Size.create(inputs).fetch();
        sails.log.debug("New Groessenprofil....")
        sails.log.debug(size)
        if (!size) { throw 'notFound'; }
        return {
          message: "Successfully created.",
          size: size
        };
      }
    
    
    

   


};

