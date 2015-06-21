'use strict';

/* Controllers */

angular.module('phonecatControllers', [])

.controller('PhoneListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderPhone = 'age';
}])

.controller('PhoneDetailsController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }
]);