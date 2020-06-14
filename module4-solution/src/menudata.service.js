(
  function () {
'user strict'

angular.module('RestaurantApp')
.service('Restaurantservice',Restaurantservice);


  Restaurantservice.$inject=['$http'];
  function Restaurantservice($http) {
    var service=this;

    service.getitems = function () {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(function (response) {

        return response.data;

      });
    };

    service.getdetails = function (sname) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
        params: {
            category: sname
        }
      }).then(function (response) {

        return response.data.menu_items;
      });

    };
  }

})();
