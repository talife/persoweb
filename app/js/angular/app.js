'use strict';

/* App Module */

var homeApp = angular.module('homeApp', [
  'ngRoute',

  'homeControllers',
  'homeFilters',
  'homeServices'
]);

homeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      }).
      when('/experience', {
        templateUrl: 'partials/experience.html',
        controller: 'ExperienceCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/portofolio', {
        templateUrl: 'partials/portofolio.html',
        controller: 'PortofolioCtrl'
      }).
      when('/skills', {
        templateUrl: 'partials/skills.html',
        controller: 'SkillsCtrl'
      }).
      when('/cv', {
        templateUrl: 'partials/cv.html',
        controller: 'CvCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
