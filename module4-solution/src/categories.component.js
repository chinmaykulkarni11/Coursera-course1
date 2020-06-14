(
  function () {
'user strict'

angular.module('RestaurantApp')
.component('category', {
   templateUrl: 'template/category.template.html',
   bindings: {
     items: '<'
   }
 });

})();
