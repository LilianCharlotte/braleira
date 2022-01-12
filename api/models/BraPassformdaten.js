module.exports = {
    attributes: {
        groesse: {type: 'number',  columnType: 'DECIMAL (6,2)', required: true },
        cup: { type: 'string',  columnType: 'varchar(80)', required: true },
        
        koerbchenZuKlein:{ type: 'boolean', columnType: 'boolean', required: true },
        koerbchenZuGroß:{ type: 'boolean', columnType: 'boolean', required: true },
        koerbchenNichtAusgefüllt:{ type: 'boolean', columnType: 'boolean', required: true },
        koerbchenSehrAusgefüllt:{ type: 'boolean', columnType: 'boolean', required: true },
        koerbchenZuSchmal:{ type: 'boolean', columnType: 'boolean', required: true },
        koerbchenPasstSehrGut:{ type: 'boolean', columnType: 'boolean', required: true },
        koerbchenPassend:{ type: 'boolean', columnType: 'boolean', required: true },

        bandSitztZuEng:{ type: 'boolean', columnType: 'boolean', required: true },
        bandRutschtHinten:{ type: 'boolean', columnType: 'boolean', required: true },
        bandRutschtVorne:{ type: 'boolean', columnType: 'boolean', required: true },
        bandTrägerRutschen:{ type: 'boolean', columnType: 'boolean', required: true },
        bandPassend:{ type: 'boolean', columnType: 'boolean', required: true },


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
