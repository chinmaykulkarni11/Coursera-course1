// (function () {
// "use strict";
//
// angular.module('public')
// .controller('RegistrationController', RegistrationController);
//
// RegistrationController.$inject = ['check'];
// function RegistrationController(check) {
//   var reg = this;
//   reg.firstname="saurabh";
//   reg.lastname="jadhav";
//   reg.email="f@s";
//   reg.phone="234-456-2343";
//   reg.items=check;
//
//   reg.check="";
//   reg.submit=function () {
//     console.log(reg.items);
//     console.log(reg.favourite);
//
//     var item=reg.favourite;
//     var items=reg.items;
//     console.log("inside the function");
//     for(var i=0;i<items.length;i++)
//       {
//
//         if(items[i].short_name.toLowerCase().indexOf(item.toLowerCase()) !== -1)
//         {
//           console.log("inside if",items[i].short_name);
//           reg.check=true;
//         }
//         else {
//           reg.check=false;
//         }
//       }
//       console.log(reg.check);
//       }
// console.log(reg.check);
// }
//
// })();



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
