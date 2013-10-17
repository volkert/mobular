MobularUI.service('Todo', function() {

  var __all = [];

  var todoService = {
    all: function() {
      return __all;
    },
    add: function(todo) {
      __all.push(todo);
    }
  };

  for (var i=0;i<300;i++) {
    todoService.add({ title: 'Todo #' + i, done: false });
  }

  return todoService;
});