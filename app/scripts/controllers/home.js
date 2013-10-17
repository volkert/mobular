'use strict';

angular.module('mobularApp').controller('HomeCtrl', function ($scope, Bikini) {

  $scope.models = Bikini.models();

  $scope.addEmployee = function() {
    Bikini.add({ firstname: $scope.firstname, lastname: $scope.lastname });
  };

  $scope.removeEmployee = function(id) {
    Bikini.remove(id);
  };

});






















