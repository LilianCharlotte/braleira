/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
module.exports.bootstrap = async function() {

  // Import dependencies
  var path = require('path');

  // This bootstrap version indicates what version of fake data we're dealing with here.
  var HARD_CODED_DATA_VERSION = 13;

  // This path indicates where to store/look for the JSON file that tracks the "last run bootstrap info"
  // locally on this development computer (if we happen to be on a development computer).
  var bootstrapLastRunInfoPath = path.resolve(sails.config.appPath, '.tmp/bootstrap-version.json');

  // Whether or not to continue doing the stuff in this file (i.e. wiping and regenerating data)
  // depends on some factors:
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // If the hard-coded data version has been incremented, or we're being forced
  // (i.e. `--drop` or `--environment=test` was set), then run the meat of this
  // bootstrap script to wipe all existing data and rebuild hard-coded data.
  if (sails.config.models.migrate !== 'drop' && sails.config.environment !== 'test') {
    // If this is _actually_ a production environment (real or simulated), or we have
    // `migrate: safe` enabled, then prevent accidentally removing all data!
    if (process.env.NODE_ENV==='production' || sails.config.models.migrate === 'safe') {
      sails.log('Since we are running with migrate: \'safe\' and/or NODE_ENV=production (in the "'+sails.config.environment+'" Sails environment, to be precise), skipping the rest of the bootstrap to avoid data loss...');
      return;
    }//•

    // Compare bootstrap version from code base to the version that was last run
    var lastRunBootstrapInfo = await sails.helpers.fs.readJson(bootstrapLastRunInfoPath)
    .tolerate('doesNotExist');// (it's ok if the file doesn't exist yet-- just keep going.)

    if (lastRunBootstrapInfo && lastRunBootstrapInfo.lastRunVersion === HARD_CODED_DATA_VERSION) {
      sails.log('Skipping v'+HARD_CODED_DATA_VERSION+' bootstrap script...  (because it\'s already been run)');
      sails.log('(last run on this computer: @ '+(new Date(lastRunBootstrapInfo.lastRunAt))+')');
      return;
    }//•

    sails.log('Running v'+HARD_CODED_DATA_VERSION+' bootstrap script...  ('+(lastRunBootstrapInfo ? 'before this, the last time the bootstrap ran on this computer was for v'+lastRunBootstrapInfo.lastRunVersion+' @ '+(new Date(lastRunBootstrapInfo.lastRunAt)) : 'looks like this is the first time the bootstrap has run on this computer')+')');
  }
  else {
    sails.log('Running bootstrap script because it was forced...  (either `--drop` or `--environment=test` was used)');
  }

  // Since the hard-coded data version has been incremented, and we're running in
  // a "throwaway data" environment, delete all records from all models.
  for (let identity in sails.models) {
    await sails.models[identity].destroy({});
  }//∞

  // By convention, this is a good place to set up fake data during development.
  await User.createEach([
    { emailAddress: 'admin@example.com', fullName: 'Ryan Dahl', isSuperAdmin: true, isAdmin: true, password: await sails.helpers.passwords.hashPassword('muckefuck') },
    { emailAddress: 'lisa@lindgren.com', fullName: 'Lisa Lindgren', isSuperAdmin: true, isAdmin: true, password: await sails.helpers.passwords.hashPassword('muckefuck')}
  ]);

  await BraTragekomfort.createEach([
    { name: 'soll nicht drücken und nicht eng sein', id: 1},
    { name: 'viel Push-Up', id: 2},
    { name: 'soll genügend Halt geben', id: 3},
    { name: 'meine Brüste sollen kleiner aussehen', id: 4},
    { name: 'Bewegungsfreiheit', id: 5},
    { name: 'der Stoff soll auch für sensible Haut geeignet sein', id: 6},
    { name: 'meine Brüste sollen sehr gleichmäßig aussehen', id: 7},
    { name: 'soll sich möglichst leicht anfühlen', id: 8},
    { name: 'soll nicht verrutschen', id: 9,},
    { name: 'bügellos', id: 10},
    { name: 'mit Bügel', id: 11},

  ]);

  await Farbe.createEach([
    { name: 'rosa', id: 1},
    { name: 'rot', id: 2},
    { name: 'schwarz', id: 3},
    { name: 'weiß', id: 4},
    { name: 'grau und dunkelblau', id: 5},
    { name: 'blau', id: 6},
    { name: 'grün', id: 7},
    { name: 'braun', id: 8},
    { name: 'lila', id: 9},
  ]);

  await Muster.createEach([
    { name: 'einfarbig/ohne', id: 1},
    { name: 'gemustert', id: 2},
  ]);

  await Stoff.createEach([
    { name: 'Baumwolle', id: 1},
    { name: 'mit Spitze', id: 2},
    { name: 'stretchy Stoffe', id: 3},
  ]);

  await BhArt.createEach([
    { name: 'Bralette', id: 1},
    { name: 'Balconette', id: 2},
    { name: 'T-Shirt BH', id: 3},
    { name: 'Push-Up BH', id: 4},
    { name: 'Trägerloser BH', id: 5},
    { name: 'Sport-BH', id: 6},
    { name: 'Plunge Neckline', id: 7},
  ]);

  await Bra.createEach([
    {marke: 'etam paris', model: 'SUBLIME BH Nr. 4 – leichter Push-up', form:'Push-Up', groesse: '75F', stoff:'mit Spitze', farbe:'grau und dunkelblau', muster: 'einfarbig/ohne', shoppingLink:'https://www.etam.de/de_DE/bhs/nach-form/klassiker/bh-nr.-4-%E2%80%93-leichter-push-up-652482429.html', bildpfad:'/images/bra/SUBLIME BH Nr. 4 – leichter Push-up.jpg'},
    {marke: 'etam paris', model: 'JOJOBA BH Nr. 4 – leichter Push-up', form:'Push-Up', groesse: '70E', stoff: 'stretchy Stoffe', farbe:'schwarz', muster:'gemustert', shoppingLink: 'https://www.etam.de/de_DE/bhs/nach-form/klassiker/bh-nr.-4-%E2%80%93-leichter-push-up-652792605.html', bildpfad:'/images/bra/JOJOBA BH Nr. 4 – leichter Push-up.jpg' },
    {marke: 'etam paris', model: 'PURE FIT Nicht-vorgeformter-BH', form:'T-Shirt Bh', groesse: '75B', stoff: 'stretchy Stoffe', farbe:'weiß', muster:'einfarbig/ohne', shoppingLink: 'https://www.etam.de/de_DE/bhs/nach-form/bugel-bhs/nicht-vorgeformter-bh-639989601.html', bildpfad:'/images/bra/PURE FIT Nicht-vorgeformter-BH.jpg' },
    {marke: 'etam paris', model: 'HYMNE BH Nr. 2 – Push-up mit tiefem Dekolleté', form:'Push-Up', groesse: '65C', stoff: 'mit Spitze', farbe:'rot', muster:'einfarbig/ohne', shoppingLink: 'https://www.etam.de/de_DE/bhs/bhs-styles/push-up-bhs/bh-nr.-2-%E2%80%93-push-up-mit-tiefem-dekollete%C2%A0-%C2%A0-652949073.html', bildpfad:'/images/bra/HYMNE BH Nr. 2 – Push-up mit tiefem Dekolleté.jpg' },
    {marke: 'etam paris', model: 'STYLE Push-up-BH ohne Bügel', form:'Push-Up', groesse: '70C', stoff: 'mit Spitze', farbe:'weiß', muster:'einfarbig/ohne', shoppingLink: 'https://www.etam.de/de_DE/bhs/nach-form/alle-triangle/push-up-bh-ohne-bugel-652801680.html', bildpfad:'/images/bra/STYLE Push-up-BH ohne Bügel.jpeg' },
    {marke: 'hunkemöller', model: 'Vorgeformter Push-up-Bügel-BH Malika - grün', form:'Push-Up', groesse: '80A', stoff:'mit Spitze', farbe:'grün', muster:'einfarbig/ohne', shoppingLink:'https://www.hunkemoller.de/vorgeformter-push-up-buegel-bh-malika-gruen-191715.html', bildpfad:'/images/bra/Vorgeformter Push-up-Bügel-BH Malika - grün.jpg'},
    {marke: 'hunkemöller', model: 'Vorgeformter Push-up-Bügel-BH Pia - Schwarz', form:'Push-Up', groesse: '65E', stoff:'mit Spitze', farbe:'schwarz', muster:'gemustert', shoppingLink:'https://www.hunkemoller.de/vorgeformter-push-up-buegel-bh-pia-schwarz-112477.html', bildpfad:'/images/bra/Vorgeformter Push-up-Bügel-BH Pia - Schwarz.jpg'},
  
  ]);

  

  // Save new bootstrap version
  await sails.helpers.fs.writeJson.with({
    destination: bootstrapLastRunInfoPath,
    json: {
      lastRunVersion: HARD_CODED_DATA_VERSION,
      lastRunAt: Date.now()
    },
    force: true
  })
  .tolerate((err)=>{
    sails.log.warn('For some reason, could not write bootstrap version .json file.  This could be a result of a problem with your configured paths, or, if you are in production, a limitation of your hosting provider related to `pwd`.  As a workaround, try updating app.js to explicitly pass in `appPath: __dirname` instead of relying on `chdir`.  Current sails.config.appPath: `'+sails.config.appPath+'`.  Full error details: '+err.stack+'\n\n(Proceeding anyway this time...)');
  });

};
