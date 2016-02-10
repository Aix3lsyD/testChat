'use strict';

angular.module('clientApp')
  .factory('Auth', function($firebaseAuth, FirebaseUrl){
    var ref = new Firebase(FirebaseUrl);
    var auth = $firebaseAuth(ref);

      //console.log(auth);

    return auth;

  });
