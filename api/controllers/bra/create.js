module.exports = {

    //Test

    friendlyName: 'Create new bra',


    description: 'Create new bra entry.',


    inputs: {

        model: {
            description: 'Name des BH-Models',
            type: 'string',
            isNotEmptyString: true,
            maxLength: 200,
            required: true
        },

        marke: {
            description: 'Markenname des BHs',
            type: 'string',
            isNotEmptyString: true,
            maxLength: 200,
            required: true
        },

        form: {
            description: 'Form des BHs',
            type: 'string',
            isNotEmptyString: true,
            maxLength: 80,
            required: true
        },

        groesse: {
            description: 'Größe des BHs',
            type: 'string',
            required: true,
            isNotEmptyString: true,
            maxLength: 10
        },

        stoff: {
            description: 'BH Stoff',
            type: 'string',
            isNotEmptyString: true,
            maxLength: 80,
            required: true
        },

        farbe: {
            description: 'Farbe des BHs',
            type: 'string',
            isNotEmptyString: true,
            maxLength: 80,
            required: true
        },

        muster: {
            description: 'Muster des BHs',
            type: 'string',
            isNotEmptyString: true,
            maxLength: 80,
            required: true
        },

        // sternebewertung: {
        //     description: 'Bewertung des BHs',
        //     type: 'string',
        //     isNotEmptyString: true,
        //     required: true
        // },
        
        shoppingLink: {
            description: 'Link zum shoppen des BHs',
            type: 'string',
            isNotEmptyString: true,
            maxLength: 300,
            required: true
        },

        bildpfad: {
            description: 'bildpfad BH',
            type: 'string',
            isNotEmptyString: true,
            maxLength: 300,
            required: true
        },

       /*Beziehungstypen  */ 
       /*  owner: {
            description: 'Form des BHs',
            type: 'string',
            isNotEmptyString: true,
            required: true
        },

        pf_bewertung: {
            description: 'Form des BHs',
            type: 'string',
            isNotEmptyString: true,
            required: true
        }, */
        


    },


    exits: {

        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/bra/eintragsbestaetigung',
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

