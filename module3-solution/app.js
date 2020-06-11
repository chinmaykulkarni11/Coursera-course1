(
function () {
  'user strict'

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',founddirective);

  function founddirective() {
    var ddo = {
      templateUrl: 'template.html',
      scope: {
        items: '<',
        remove: '&'
      },
      controller: FoundDirectiveController,
      bindToController: true,
      controllerAs: 'founddir'

    };
    return ddo;
  }

  function FoundDirectiveController() {
    var founddir = this;

    founddir.notfound = function() {
      if (founddir.items.length == 0) {
        return true;
      }
      return false;
    };
  }

  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl=this;

    ctrl.found = MenuSearchService.founditems();
    ctrl.getitems=function () {

    var promise = MenuSearchService.getMenuItems(ctrl.str);
      promise.then(function (response) {
      ctrl.categories = response;
    });

}

ctrl.remove = function(index) {
    MenuSearchService.remove(index);
  };
}

  MenuSearchService.$inject=['$http'];
  function MenuSearchService($http) {
    var service=this;
    var founditems=[];

    service.getMenuItems = function (str) {

      if (str === "") {
        founditems=[];
          return founditems;
    }
    return $http({
     method: "GET",
     url: "https://davids-restaurant.herokuapp.com/menu_items.json"
   }).then(function (response) {
     var items=response.data.menu_items;

    founditems.splice(0, founditems.length);
    if(str != ""){
     for(var i=0;i<items.length;i++){
     if(items[i].description.toLowerCase().indexOf(str.toLowerCase()) !== -1)
     {
       founditems.push(items[i]);
     }
   }
 }
 else{
   console.log("the string is empty");
 }
   return founditems;
 });
};

   service.founditems = function() {
       return founditems;
     };
     service.remove = function(index) {
   founditems.splice(index, 1);
 };
}

})();
