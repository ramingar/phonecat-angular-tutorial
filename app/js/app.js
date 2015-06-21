'use strict';

/* App Module */

angular.module('PhonecatApp', [
  'ngRoute',
  'phonecatControllers'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
      .when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListController'
      })
      .when('/phones/:phoneId', {
          templateUrl: 'partials/phone-details.html',
          controller: 'PhoneDetailsController'
      })
      .otherwise({
          redirectTo: '/phones'
      });
}]);