module.exports = {


    friendlyName: 'View admin page',


    description: 'Display the dashboard "Admin" page.',


    inputs: {

        bhModel: {
            type: 'string'
        },

        bhMarke: {
            type: 'string'
        },

    },


    exits: {

        success: {
            viewTemplatePath: 'pages/admin/bra',
            description: 'Display the admin page for authenticated users.'
        },

    },


    fn: async function ({bhModel, bhMarke}) {

        return {};



 //Start building the values to set in the db.
    // (We always set the fullName if provided.)
    var valuesToSet = {
        bhModel,
        bhMarke
      };



    }


   


};

