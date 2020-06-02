(function() {
'use strict'
  angular.module('myfirstapp',[])

  .controller('myfirstcontroller',function ($scope) {
    $scope.name = "";
    $scope.totalval = 0;
    $scope.displayno = function () {
      var totalcalc= calc($scope.name);
      $scope.totalval = totalcalc;
    };

    function calc(string) {
      var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;

    }

  });

})();
