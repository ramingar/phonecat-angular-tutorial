'use strict';

/* Controllers */

angular.module('phonecatApp', [])

.controller('PhoneListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderPhone = 'age';
}]);