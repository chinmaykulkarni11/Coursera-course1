// (
//   function () {
//     'user strict'
//
//     angular.module('public')
//     .service('signupservice',signupservice);
//
//     signupservice.$inject=['$http','ApiPath'];
//     function signupservice($http,ApiPath) {
//       var service=this;
//
//       service.getitems=function () {
//           return $http.get(ApiPath + '/menu_items.json').then(function (response) {
//
//           return response.data.menu_items;
//       });
//
//     };
//
//   };
//
// })();



(function () {
"use strict";

angular.module('public')
.service('signupservice', signupservice);

signupservice.$inject=['$http','ApiPath'];
function signupservice($http,ApiPath) {
  var service = this;
  var user;

  service.getItem = function (shortName) {
    if (shortName) {
      return $http.get(ApiPath + "/menu_items/" + shortName.toUpperCase() + ".json").then(function (response) {
        return response.data;
      });
    }
  };

  service.setuser = function(user) {
    service.user = user;
  }

  service.getuser = function() {
    return service.user;
  }

}

})();
