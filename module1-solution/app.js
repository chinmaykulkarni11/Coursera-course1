(function () {
  'use strict';

  angular.module('myapp',[]).
  controller('mycontroller',mycontroller);

  mycontroller.inject= ['$scope'];
  function mycontroller($scope) {
    $scope.name="";
    $scope.check=function () {

      var array=$scope.name.split(',');
      var len=array.length;

      if(array[0]=="")
      {
        $scope.message="Please enter data first";
        $scope.color="Red";
      }
      else
      {
        for(var i=0;i<len;i++)
        {
          if(array[i]=="")
          {
            $scope.message="please don't leave empty spaces between or after comma's";
            $scope.color="Red";
          }
          else
          {
            $scope.color="green";
            if(len>3)
            {
              $scope.message="Too much!";
            }
            else
            {
              $scope.message="Enjoy!";
            }

          }
        }

      }
                              }
                                  }

})();
