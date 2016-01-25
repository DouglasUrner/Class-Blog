/*
** Server side user account functions.
*/

Accounts.validateNewUser( function(user) {
  // Check that user is logging in with an approved account.
  console.log(user);
  if (user.services.google) {
    if (user.services.google.email.match("@g.highlineschools.org$")) {
      return true;
    } else {
      throw new Meteor.Error(403, "Please login with your HPS Google account.");
    }
  } else {
    throw new Meteor.Error(403, "Please login with your HPS Google account.");
  }
  return true;
});

Accounts.onCreateUser( function(options, user) {

  if (options.profile) {
    // Overwrites the default onCreateUser(), so need to do this ourselves.
    user.profile = options.profile;
  }
  console.log(user);

  return user;
});

Accounts.validateLoginAttempt( function(info) {
  return true;
});
