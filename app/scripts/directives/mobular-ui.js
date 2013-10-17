var MobularUI = angular.module('MobularUI', []);

MobularUI.directive('mwTitle', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      title: '@',
      rightTitle: '@',
      rightHref: '@',
      leftDirectional: '=',
      leftTitle: '@',
      leftHref: '@'
    },
    template: '<header class="bar-title">' +
        '  <a ng-if="leftTitle" ng-class="{ true: \'button-prev\', false: \'button\' }[leftDirectional]" ng-href="{{ leftHref }}">{{ leftTitle }}</a>' +
        '  <h1 class="title">{{ title }}</h1>' +
        '  <a ng-if="rightTitle" class="button" ng-href="{{ rightHref }}">{{ rightTitle }}</a>' +
        '</header>'
  }
});

MobularUI.directive('mwContent', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: '<div class="content" ng-transclude></div>'
  }
});

MobularUI.directive('mwTabBar', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: '<nav class="bar-tab">' +
        '  <ul class="tab-inner" ng-transclude></ul>' +
        '</nav>'
  }
});

MobularUI.directive('mwTabBarItem', function ($location) {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      icon: '@',
      href: '@'
    },
    template: '<li class="tab-item" ng-class="{ true: \'active\' }[isActive()]">' +
        ' <a ng-href="{{ href }}">' +
        '   <img class="tab-icon" ng-src="{{ icon }}">' +
        '   <div class="tab-label" ng-transclude></div>' +
        ' </a>' +
        '</li>',
    controller: function ($scope) {
      $scope.isActive = function () {
        return '#' + $location.path() === $scope.href;
      }
    }
  }
});

MobularUI.directive('mwList', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      items: '='
    },
    template:
        '<ul class="list">' +
        '  <li ng-repeat="item in items" ng-transclude></li>' +
        '</ul>',
    controller: function($scope) {
      $scope.foobar = function() {
        console.log('foobar');
      };
    }
  }
});