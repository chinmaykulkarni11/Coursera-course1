(
  function () {
'user strict'

angular.module('RestaurantApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
// Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'template/tab1.html',
    })
    .state('categories', {
      url: '/tab1',
      templateUrl: 'template/tab2.html',
      controller: 'Restaurantcontroller as categories',
      resolve: {
        items: ['Restaurantservice',function (Restaurantservice) {
               return Restaurantservice.getitems();
        }]
      }
    })
    .state('details', {
      url: '/tab2/{categoryId}',
      templateUrl: 'template/tab3.html',
      controller: 'Restaurantdetailcontroller as details',
      resolve: {
        item: ['$stateParams','Restaurantservice',function ($stateParams,Restaurantservice) {
               return Restaurantservice.getdetails($stateParams.categoryId);

        }]
      }
    });
  }

})();
