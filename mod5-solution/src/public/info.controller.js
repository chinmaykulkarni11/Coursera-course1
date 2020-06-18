(function () {
"use strict";

angular.module('public')
.controller('infocontroller', infocontroller);

infocontroller.$inject = ['signupservice'];

function infocontroller(signupservice) {
  var $ctrl = this;
  $ctrl.user = signupservice.getuser();
}

})();
