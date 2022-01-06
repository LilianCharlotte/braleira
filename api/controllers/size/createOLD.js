//const Groessenprofil = require("../../models/Quiz");

module.exports = {

    //Test

    friendlyName: 'Create the quiz',


    description: 'Create a quiz entry.',
  
    inputs: {

        unterbrustbreite: {
            description: 'Unterbrustbreite',
            type: 'number',
            required: true
        },

        brustumfang: {
            description: 'Brustumfang',
            type: 'number',
            required: true
        },

        // passformdaten: {
        //     description: 'Form des BHs',
        //     type: 'string',
        //     required: true
        // },

        // persoenlicheAngaben: {
        //     description: 'Größe des BHs',
        //     type: 'string',
        //     required: true
        // },

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
        let quiz = await Quiz.create(inputs).fetch();
        sails.log.debug("New Groessenprofil....")
        sails.log.debug(quiz)
        if (!quiz) { throw 'notFound'; }
        return {
          message: "Successfully created.",
          quiz: quiz
        };
      }
    
    
    

   


};
