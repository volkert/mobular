MobularUI.service('Bikini', function ($q, $rootScope) {

  var model = M.Model.extend({
    idAttribute: '_id'
  });

  var collection = M.Collection.extend({
    model: model,
    url: 'http://nerds.mway.io:8200/bikini/employees',
    store: new M.BikiniStore()
  });

  var employees = new collection();
  employees.fetched = false;

  employees.on('all', function () {
    if (!$rootScope.$$phase) {
      $rootScope.$apply();
    }
  });

  return {
    models: function () {
      var deferred = $q.defer();
      if (!employees.fetched) {
        employees.fetch({
          success: function (data) {
            employees.fetched = true;
            deferred.resolve(data.models);
          }
        });
      } else {
        deferred.resolve(employees.models);
      }
      return deferred.promise;
    },
    add: function (model) {
      employees.create(model);
    },
    remove: function (model) {
      model.destroy();
    }
  };
});