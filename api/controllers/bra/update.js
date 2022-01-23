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

        redirect: {
            responseType: 'redirect',
            description: 'Es wurde erfolgreich ein neuer Eintrag angelegt. '
        },

    },


    fn: async function (inputs) {
        sails.log.debug("Update bra....")
        sails.log(inputs);

    
        this.req.session.aktualisierterBra = inputs;
        throw {redirect: '/bra/vergleich'};

    }
}

