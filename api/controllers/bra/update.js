module.exports = {


    friendlyName: 'View admin page',


    description: 'Display the dashboard "Admin" page.',


    inputs: {

        id: {
            description: 'The id of the bra.',
            type: 'number',
            required: true
        },

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

        form: {
            description: 'Form des BHs',
            type: 'string',
            required: true
        },

        groesse: {
            description: 'Größe des BHs',
            type: 'string',
            required: true
        },

        stoff: {
            description: 'BH Stoff',
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
        },

        // sternebewertung: {
        //     description: 'Bewertung des BHs',
        //     type: 'string',
        //     required: true
        // },

        shoppingLink: {
            description: 'Link zum shoppen des BHs',
            type: 'string',
            required: true
        },

        bildpfad: {
            description: 'bildpfad BH',
            type: 'string',
            required: true
        },

        /*Beziehungstypen  */
        /*  owner: {
             description: 'Form des BHs',
             type: 'string',
             required: true
         },
 
         pf_bewertung: {
             description: 'Form des BHs',
             type: 'string',
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


    fn: async function (inputs) {
        sails.log.debug("Update bra....")
        sails.log(inputs);
        let bra = await Bra.updateOne({ id: inputs.id }).set(inputs);
        sails.log.debug("Updated bra....")
        sails.log.debug(bra)
        if (!bra) { throw 'notFound'; }
        return {
            message: "Successfully created.",
            bra: bra

        }





    }
}

