module.exports = {

    friendlyName: 'View admin page',


    description: 'Display the dashboard "Admin" page.',

    inputs: {},

    exits: {

        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/bra/vergleich',
            description: 'Es wurde erfolgreich ein neuer Eintrag angelegt. '
        },

    },

    fn: async function (inputs) {
        let aktualisierterBra = this.req.session.aktualisierterBra;
        if (!aktualisierterBra) { throw 'notFound'; }
        let alterBra = await Bra.findOne({ id: aktualisierterBra.id });
        if (!alterBra) { throw 'notFound'; }
        return {
            aktualisierterBra: aktualisierterBra,
            alterBra: alterBra,
        }
    }

}