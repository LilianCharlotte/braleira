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

        //Optionen Tabelle Tragekomfort

        tragekomfortbra1: {
            description: 'tragekomfortbra1',
            type: 'number',
        },

        tragekomfortbra2: {
            description: 'tragekomfortbra2',
            type: 'number',
        },

        tragekomfortbra3: {
            description: 'tragekomfortbra3',
            type: 'number',
        },

        tragekomfortbra4: {
            description: 'tragekomfortbra4',
            type: 'number',
        },

        tragekomfortbra5: {
            description: 'tragekomfortbra5',
            type: 'number',
        },

        tragekomfortbra6: {
            description: 'tragekomfortbra6',
            type: 'number',
        },

        tragekomfortbra7: {
            description: 'tragekomfortbra7',
            type: 'number',
        },

        tragekomfortbra8: {
            description: 'tragekomfortbra8',
            type: 'number',
        },

        tragekomfortbra9: {
            description: 'tragekomfortbra9',
            type: 'number',
        },

        tragekomfortbra10: {
            description: 'tragekomfortbra10',
            type: 'number',
        },

        tragekomfortbra11: {
            description: 'tragekomfortbra11',
            type: 'number',
        },

        //Musteroptionen

        diesesmuster1: {
            description: 'diesesmuster1',
            type: 'number',
        },

        diesesmuster2: {
            description: 'diesesmuster2',
            type: 'number',
        },

        //Stoff Optionen

        dieserstoff1: {
            description: 'dieserstoff1',
            type: 'number',
        },

        dieserstoff2: {
            description: 'dieserstoff2',
            type: 'number',
        },

        dieserstoff3: {
            description: 'dieserstoff3',
            type: 'number',
        },

        // Körbchen

        k_klein: {
            description: 'körbchen zu klein',
            type: 'boolean'
        },

        k_groß: {
            description: 'körbchen zu groß',
            type: 'boolean'
        },

        k_n_ausgef: {
            description: 'körbchen nicht ausgef',
            type: 'boolean'
        },

        k_z_ausgef: {
            description: 'körbchen zu ausgef',
            type: 'boolean'
        },

        k_zs_ausgef: {
            description: 'körbchen zu seitlich ausgef',
            type: 'boolean'
        },
        k_passtSehrGut: {
            description: 'körbchen passt sehr gut',
            type: 'boolean'
        },

        k_passt: {
            description: 'körbchen passend',
            type: 'boolean'
        },

        //Unterbrustband

        b_eng: {
            description: 'band zu eng',
            type: 'boolean'
        },

        b_rutscht_h: {
            description: 'band bewegt sich und rutscht hinten hoch',
            type: 'boolean'
        },

        b_rutscht_v: {
            description: 'band bewegt sich und rutscht vorne hoch',
            type: 'boolean'
        },

        b_t_rutscht: {
            description: 'träger rutschen',
            type: 'boolean'
        },

        b_passend: {
            description: 'band passend',
            type: 'boolean'
        }

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
        sails.log.info(inputs)
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
			messdaten = await Messdaten.create({unterbrustbreite:ubb, brustumfang:bu, owner:userId}).fetch();
		}
		
		const existingBpdaten = await BraPassformdaten.findOne({ owner: userId});
		if (existingBpdaten) {
			bpdaten = await BraPassformdaten.update({ owner: userId }).set({cup:cup, groesse:groesse}).fetch();
		} else {
			bpdaten = await BraPassformdaten.create({cup:cup, groesse:groesse, owner:userId}).fetch();
		}

        const komfortOptionen = [];
        for (i = 1; i <= 11; i++) {
            if (inputs["tragekomfortbra" + i]) {
                komfortOptionen.push(i);
            }
        }
        await User.replaceCollection(userId, 'komfort').members(komfortOptionen);

        const musterOptionen = [];
        for (i = 1; i <= 3; i++) {
            if (inputs["diesesmuster" + i]) {
                musterOptionen.push(i);
            }
        }
        await User.replaceCollection(userId, 'bhmuster').members(musterOptionen);

        const stoffOptionen = [];
        for (i = 1; i <= 3; i++) {
            if (inputs["dieserstoff" + i]) {
                stoffOptionen.push(i);
            }
        }
        await User.replaceCollection(userId, 'bhstoff').members(stoffOptionen);

 		
        sails.log.debug("New Groessenprofil....")
        sails.log.debug(messdaten)
        sails.log.debug(bpdaten)

        if (!messdaten) { throw 'notFound'; }
        if (!bpdaten) { throw 'notFound'; }

        return {
          message: "Successfully created.",
          messdaten: messdaten,
          bpdaten: bpdaten
        };
      }

};

