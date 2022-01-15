module.exports = {
    attributes: {
        groesse: {type: 'number',  columnType: 'DECIMAL (6,2)', required: true },
        cup: { type: 'string',  columnType: 'varchar(80)', required: true },
        
        koerbchenZuKlein:{ type: 'boolean', columnType: 'boolean'},
        koerbchenZuGroß:{ type: 'boolean', columnType: 'boolean'},
        koerbchenNichtAusgefüllt:{ type: 'boolean', columnType: 'boolean'},
        koerbchenSehrAusgefüllt:{ type: 'boolean', columnType: 'boolean'},
        koerbchenZuSchmal:{ type: 'boolean', columnType: 'boolean'},
        koerbchenPasstSehrGut:{ type: 'boolean', columnType: 'boolean'},
        koerbchenPassend:{ type: 'boolean', columnType: 'boolean'},

        bandSitztZuEng:{ type: 'boolean', columnType: 'boolean'},
        bandRutschtHinten:{ type: 'boolean', columnType: 'boolean'},
        bandRutschtVorne:{ type: 'boolean', columnType: 'boolean'},
        bandTrägerRutschen:{ type: 'boolean', columnType: 'boolean'},
        bandPassend:{ type: 'boolean', columnType: 'boolean'},


        owner:{
          model:'user',
          unique: true 
          /*--> eigentlich wäre unique true nicht korrekt, 
          weil ein User in der Theorie unterschiedliche Bewertungen zu unterschiedlichen BHs anlegen dürfte, 
          aus Vereinfachungsgründen ist das Feature allerdings weggefallen
          */
        }
      },
  };
