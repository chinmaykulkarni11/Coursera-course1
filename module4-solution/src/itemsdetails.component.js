(
  function () {
'user strict'

angular.module('RestaurantApp')
 .component('itemDetail', {
    templateUrl: 'template/itemDetail.template.html',
    bindings: {
      items: '<'
    }
  });

})();
