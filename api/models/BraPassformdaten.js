module.exports = {
  attributes: {
    groesse: {type: 'number',  columnType: 'DECIMAL (6,2)', required: true },
    cup: { type: 'string',  columnType: 'varchar(80)', required: true },

    k_klein:{ type: 'boolean', columnType: 'boolean'},
    k_groß:{ type: 'boolean', columnType: 'boolean'},
    k_n_ausgef:{ type: 'boolean', columnType: 'boolean'},
    k_z_ausgef:{ type: 'boolean', columnType: 'boolean'},
    k_zs_ausgef:{ type: 'boolean', columnType: 'boolean'},
    k_passtSehrGut:{ type: 'boolean', columnType: 'boolean'},
    k_passt:{ type: 'boolean', columnType: 'boolean'},

    b_eng:{ type: 'boolean', columnType: 'boolean'},
    b_rutscht_h:{ type: 'boolean', columnType: 'boolean'},
    b_rutscht_v:{ type: 'boolean', columnType: 'boolean'},
    b_t_rutscht:{ type: 'boolean', columnType: 'boolean'},
    b_passend:{ type: 'boolean', columnType: 'boolean'},


    owner:{
      model:'user',
      unique: true
      /*--> eigentlich wäre unique true nicht korrekt und die Verwendung der Collection hier besser,
          weil ein User in der Theorie unterschiedliche Bewertungen zu unterschiedlichen BHs anlegen dürfte,
          aus Zeitgründen ist dies allerdings weggefallen
          */
    }
  },
};
