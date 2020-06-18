(
  function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService', 'signupservice', 'data'];

function RegistrationController(MenuService, signupservice, data) {
  var reg = this;
  var shortNames = [];

  for (var i = 0; i < data.menu_items.length; i++) {
    shortNames.push(data.menu_items[i].short_name.toLowerCase() + "");
  }


  reg.submit = function() {
    signupservice.getItem(reg.user.favourite).then(function(result) {
      console.log(result);
      reg.invaliditem = false;
      reg.user.favouriteMenuItem = result;
      signupservice.setuser(reg.user);
      reg.saved = true;
    }, function(error) {
      reg.invaliditem = true;
      reg.saved = false;

    });
  };

}

})();
