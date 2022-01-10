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

        groesse: {
            description: 'Unterbrustbandgröße',
            type: 'number',
            required: true
        },

        cup: {
            description: 'Cupgröße',
            type: 'string',
            required: true
        },

        // persoenlicheAngaben: {
        //     description: 'Größe des BHs',
        //     type: 'string',
        //     required: true
        // },

        // farbe: {
        //     description: 'Farbe des BHs',
        //     type: 'string',
        //     required: true
        // },

        // muster: {
        //     description: 'Muster des BHs',
        //     type: 'string',
        //     required: true
        // }, 

        // stoff: {
        //     description: 'Stoff des BHs',
        //     type: 'string',
        //     required: true
        // }


    },


    exits: {

        success: {
            responseType: 'view',
            viewTemplatePath: 'pages/size/empfehlungen',
            description: 'Es wurde erfolgreich ein neuer Eintrag angelegt. '
        },

    },


    fn: async function (inputs) {
        sails.log.debug("quiz...")
        const userId = this.req.session.userId;
        inputs.owner = userId;

        const ubb = inputs.unterbrustbreite;
        const bu = inputs.brustumfang;
        const cup = inputs.cup;
        const groesse = inputs.groesse;

        let messdaten; 
		let bpdaten; 
		
		const existingMessdaten = await Messdaten.findOne({ owner: userId});
		if (existingMessdaten) {
			messdaten = await Messdaten.update({ owner: userId }).set({unterbrustbreite:ubb, brustumfang:bu}).fetch();
		} else {
			messdaten= await Messdaten.create({unterbrustbreite:ubb, brustumfang:bu, owner:userId}).fetch();
		}
		
		const existingBpdaten = await BraPassformdaten.findOne({ owner: userId});
		if (existingBpdaten) {
			bpdaten = await BraPassformdaten.update({ owner: userId }).set({cup:cup, groesse:groesse}).fetch();
		} else {
			bpdaten= await BraPassformdaten.create({cup:cup, groesse:groesse, owner:userId}).fetch();
		}
 		
        sails.log.debug("New Groessenprofil....")
        sails.log.debug(messdaten)
        sails.log.debug(bpdaten)
        if (!messdaten) { throw 'notFound'; }
        return {
          message: "Successfully created.",
          messdaten: messdaten,
          bpdaten: bpdaten
        };
      }

};

