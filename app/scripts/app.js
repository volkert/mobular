'use strict';

var MobularApp = angular.module('mobularApp', ['ngRoute', 'MobularUI', 'ngAnimate']);

MobularApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl'
      })
      .when('/addTodo', {
        templateUrl: 'views/addTodo.html',
        controller: 'AddTodoCtrl'
      })
}]);
