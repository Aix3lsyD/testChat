//'use strict';

angular.module('clientApp')
  .controller('AuthCtrl',function(Auth, $state){
    var authCtrl = this;

    authCtrl.user = {
      email: '',
      password: ''
    };


    authCtrl.login = function(){

      Auth.$authWithPassword(authCtrl.user)
        .then(function(authData){
          $state.go('home');
          console.log("Logged in as: ",authData.uid);
        })
        .catch(function(error){
          console.error("Authentication failed:", error);
          authCtrl.error = error;
        });
    };

    authCtrl.register = function(){

      Auth.$createUser(authCtrl.user).then(function(user){
        authCtrl.login();
      }, function(error){
        authCtrl.error = error;
      });
    };

  });
