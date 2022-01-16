/**
 * is-admin
 *
 */
 module.exports = async function (req, res, proceed) {

    // First, check whether the request comes from a logged-in user.
    // > For more about where `req.me` comes from, check out this app's
    // > custom hook (`api/hooks/custom/index.js`).
    if (!req.me) {
      return res.unauthorized();
    }//•
  
    // Then check that this user is an admin.
    if (!req.me.isAdmin&&!req.me.isSuperAdmin) {
      return res.forbidden();
    }//•
  
    // IWMIH, we've got ourselves an admin.
    return proceed();
  
  };
  