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
      throw new Meteor.Error(403, "Please user your HPS Google account.");
    }
  } else {
    if (Meteor.users.find().count() < 3) {
      // Setting up default accounts.
      return true;
    } else {
      // Right now the prevents creating password accounts on an
      // initialzed system.
      throw new Meteor.Error(403, "Please user your HPS Google account.");
    }
  }
});

Accounts.onCreateUser( function(options, user) {

  if (options.profile) {
    // Overwrites the default onCreateUser(), so need to do this ourselves.
    user.profile = options.profile;
  }
  // Add roles.
  if (Meteor.users.find().count() < 3) {
    // Setting up default accounts.
    user.roles = ['admin', 'teacher'];
  } else {
    user.roles = ['student'];
  }

  user.status = {
    active: true,   // Allowed to login.
  }

  console.log(user);
  return user;
});

Accounts.validateLoginAttempt( function(info) {
  if (typeof info.user.status === 'undefined') {
    console.log(info);
  } else {
    let status = info.user.status;
    if (status.active === true) {
      return true;
    } else {
      console.log("login denied status.active !== true");
      console.log(info);
      return false;
    }
  }
  // let date = new Date();
  // info.user.thislogin = date;
  // info.user.lastseen = date;
  // console.log(info);
  // return true;
});
