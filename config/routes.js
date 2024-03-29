/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝


  //'/': { view: 'pages/homepage' },
  //'GET /test': {view: 'test'},
  //'POST /neueruser': {action: 'useranlegen'}
  // 'GET /meal/:id/edit': { action: 'meal/edit' },
  //'POST /meal/:id/update': { action: 'meal/update' },



  'GET /':                                 { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':                 { action: 'dashboard/view-welcome' },

  'GET /bra/new':                       { view: 'pages/bra/new'},
  'POST /bra':                          { action: 'bra/create'},
  'GET /bra/search':                    { view: 'pages/bra/search'},

  'GET /quiz':                          { action: 'size/show' },
  'POST /size':                         { action: 'size/create' },
  'GET /empfehlungen':                  { action: 'size/match' },

  'GET /bra/:id/edit':                   { action: 'bra/edit'},
  'POST /bra/:id/update':                { action: 'bra/update'},
  'GET /bra/vergleich':                  { action: 'bra/vergleich' },
  'GET /bra/eintragsbestaetigung':       { action: 'bra/eintragsbestaetigung' },

  'GET /faq':                { action:   'view-faq' },
  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /impressum':          { view:     'pages/legal/impressum'},
  'GET /kontakt':            { view:     'pages/legal/kontaktseite'},
  'GET /contact':            { action:   'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                            { action: 'account/logout' },
  'GET    /api/v1/bra/find':                           { action: 'bra/find' },
  'GET    /api/v1/bra/delete':                         { action: 'bra/delete' },
  'PUT    /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT    /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT    /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT    /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST   /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST   /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST   /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST   /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST   /api/v1/observe-my-session':                 { action: 'observe-my-session', hasSocketFeatures: true },


};
