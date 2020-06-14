(function () {
'use strict';

angular.module('RestaurantApp')
.controller('Restaurantdetailcontroller',Restaurantdetailcontroller);

Restaurantdetailcontroller.$inject=['item'];
function Restaurantdetailcontroller(item) {
  var details = this;
  details.items=item;
//  details.name=items.name;
  console.log(details.items);
}

})();
