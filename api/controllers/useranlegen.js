module.exports = {


  friendlyName: 'Useranlegen',


  description: 'Useranlegen something.',


  inputs: {
    name:{
      description:"Name des Users",
      type:"string"
    },

    nachname: {
      description:"Nachname des Users",
      type:"string"
    }


  },


  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "meldung"
    }
  },


  fn: async function (inputs) {
    console.log("Aktion aufgerufen")
    console.log("Name: "+inputs.name+", Nachname: "+inputs.nachname)
    // All done.
    return {
      username: inputs.name,
      usernachname: inputs.nachname
    };

  }


};
