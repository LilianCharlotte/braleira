module.exports = {


  friendlyName: 'Match',


  description: 'Match size.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/size/empfehlungen',
      description: 'Präferenzen werden auf BH gematched.'
    },
  },


  fn: async function (inputs) {

    const userId = this.req.session.userId;

    let userMitFarben;
    let userMitFormen;
    userMitFarben = await User.findOne(userId).populate('bhfarbe');
    userMitFormen = await User.findOne(userId).populate('bhArt');

    const lieblingsFarben = [];
    for (const farbe of userMitFarben.bhfarbe) {
      lieblingsFarben.push(farbe.name);
    }

    const lieblingsFormen = [];
    for (const form of userMitFormen.bhArt) {
      lieblingsFormen.push(form.name);
    }

    const bras = await Bra.find({
      farbe: { in: lieblingsFarben },
      form: { in: lieblingsFormen },
    });

    return {
      'lieblingsFarben': lieblingsFarben,
      'lieblingsFormen': lieblingsFormen,
      'bras': bras
    };
  }

};
