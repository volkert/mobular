'use strict';

MobularApp.controller('TodosCtrl', function ($scope, Todo) {
  $scope.todos = Todo.all();
  console.log($scope.todos);
});


MobularApp.controller('AddTodoCtrl', function ($scope, $location, Todo) {

  $scope.newTodo = {
    title: '',
    done: false
  };

  $scope.addTodo = function() {
    Todo.add($scope.newTodo);
    $location.path('/todos');
  };

});