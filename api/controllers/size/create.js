module.exports = {

    //Test

    friendlyName: 'Create the quiz',


    description: 'Create a quiz entry.',
  
    inputs: {

        unterbrustbreite: {
            description: 'Unterbrustbreite',
            type: 'number',
            required: true,
            min: 0,
            max: 300
        },

        brustumfang: {
            description: 'Brustumfang',
            type: 'number',
            required: true,
            min: 0,
            max: 300
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
            type: 'string'
        },

        k_groß: {
            description: 'körbchen zu groß',
            type: 'string'
        },

        k_n_ausgef: {
            description: 'körbchen nicht ausgef',
            type: 'string'
        },

        k_z_ausgef: {
            description: 'körbchen zu ausgef',
            type: 'string'
        },

        k_zs_ausgef: {
            description: 'körbchen zu seitlich ausgef',
            type: 'string'
        },
        k_passtSehrGut: {
            description: 'körbchen passt sehr gut',
            type: 'string'
        },

        k_passt: {
            description: 'körbchen passend',
            type: 'string'
        },

        //Unterbrustband

        b_eng: {
            description: 'band zu eng',
            type: 'string'
        },

        b_rutscht_h: {
            description: 'band bewegt sich und rutscht hinten hoch',
            type: 'string'
        },

        b_rutscht_v: {
            description: 'band bewegt sich und rutscht vorne hoch',
            type: 'string'
        },

        b_t_rutscht: {
            description: 'träger rutschen',
            type: 'string'
        },

        b_passend: {
            description: 'band passend',
            type: 'string'
        },

        // persoenlicheAngaben: {
        //     description: 'Größe des BHs',
        //     type: 'string',
        //     required: true
        // },

        // Optionen Farben
        rosa: {
            type: 'string'
        },
        rot: {
            type: 'string'
        },
        schwarz: {
            type: 'string'
        },
        weiß: {
            type: 'string'
        },
        grau: {
            type: 'string'
        },
        blau: {
            type: 'string'
        },
        grün: {
            type: 'string'
        },
        braun: {
            type: 'string'
        },
        lila: {
            type: 'string'
        },


        // Optionen BhArten
        bralette: {
            type: 'string'
        },
        balconette: {
            type: 'string'
        },
        tshirtbh: {
            type: 'string'
        },
        pushupbh: {
            type: 'string'
        },
        bustier: {
            type: 'string'
        },
        traegerlos: {
            type: 'string'
        },
        sportbh: {
            type: 'string'
        },
        plunge: {
            type: 'string'
        }

    },


    exits: {

        redirect: {
            responseType: 'redirect',
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

        const lieblingsFarben = [];
        for (const farbe of ["rosa", "rot", "schwarz", "weiß", "grau", "blau", "grün", "braun", "lila"]) {
            if (inputs[farbe]) {
                lieblingsFarben.push(inputs[farbe]);
            }
        }
        sails.log.debug('Lieblingsfarben: ', lieblingsFarben);
        await User.replaceCollection(userId, 'bhfarbe').members(lieblingsFarben);

        const lieblingsBhArten = [];
        for (const art of ["bralette", "balconette", "tshirtbh", "pushupbh", "bustier", "traegerlos", "sportbh", "plunge"]) {
            if (inputs[art]) {
                lieblingsBhArten.push(inputs[art]);
            }
        }
        sails.log.debug('LieblingsBhArten: ', lieblingsBhArten);
        await User.replaceCollection(userId, 'bhArt').members(lieblingsBhArten);


        
		
		const existingMessdaten = await Messdaten.findOne({ owner: userId});
		if (existingMessdaten) {
			messdaten = await Messdaten.update({ owner: userId }).set({unterbrustbreite:ubb, brustumfang:bu}).fetch();
		} else {
			messdaten = await Messdaten.create({unterbrustbreite:ubb, brustumfang:bu, owner:userId}).fetch();
		}
		
        //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        for (const [key, value] of Object.entries(inputs)) {
            if (value === 'on') {
                inputs[key] = true;
            } else if (value === 'off') {
                inputs[key] = false;
            }
        }

		const existingBpdaten = await BraPassformdaten.findOne({ owner: userId});
		if (existingBpdaten) {
			bpdaten = await BraPassformdaten.update({ owner: userId }).set(inputs).fetch();
		} else {
			bpdaten = await BraPassformdaten.create({...inputs, owner:userId}).fetch();
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

        throw { redirect: '/empfehlungen' };
      }

};

