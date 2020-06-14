(function () {
'use strict';

angular.module('RestaurantApp')
.controller('Restaurantcontroller',Restaurantcontroller);

Restaurantcontroller.$inject=['items'];
function Restaurantcontroller(items) {
  var categories = this;

  categories.items=items;
  console.log(categories.items);
}

})();
