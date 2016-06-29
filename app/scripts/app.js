'use strict';

/**
 * @ngdoc overview
 * @name techhubApp
 * @description
 * # techhubApp
 *
 * Main module of the application.
 */
angular
  .module('techhubApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider, $locationProvider) {
      
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/meetings', {
          templateUrl: 'views/meeting.html',
          controller: 'MeetingCtrl',
          controllerAs: 'meeting'
      })
      .when('/bookings', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl',
        controllerAs: 'booking'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventCtrl',
        controllerAs: 'event'
      })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
    $locationProvider.html5Mode(true);
  });
