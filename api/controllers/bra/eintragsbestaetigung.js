module.exports = {

    friendlyName: 'View admin page',


    description: 'Display the dashboard "Admin" page.',

    inputs: {},

    exits: {
        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/bra/eintragsbestaetigung',
            description: 'Es wurde erfolgreich ein neuer Eintrag angelegt. '
        },
    },

    fn: async function (inputs) {
        let aktualisierterBra = this.req.session.aktualisierterBra;
        if (!aktualisierterBra) { throw 'notFound'; }

        sails.log.debug(aktualisierterBra);

        let bra = await Bra.updateOne({ id: aktualisierterBra.id }).set(aktualisierterBra);
        sails.log.debug("Updated bra....")
        sails.log.debug(bra)
        if (!bra) { throw 'notFound'; }
        return {
            message: "Successfully created.",
            bra: bra

        }



    }

}