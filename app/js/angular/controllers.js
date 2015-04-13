'use strict';

/* Controllers */

var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('CvCtrl', ['$scope', 'CV',
  function($scope, CV) {
    $scope.cv = CV.query();
  }]);

homeControllers.controller('HomeCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.$on('$viewContentLoaded', function() {
      $('#da-slider').cslider({
        autoplay: true,
        bgincrement: 0
      });
    });
  }]);

homeControllers.controller('AboutCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.name = "Vincent";
  }]);

homeControllers.controller('ContactCtrl', ['$scope', '$routeParams',
                                         function($scope, $routeParams) {
                                           $scope.name = "Vincent";
                                         }]);

homeControllers.controller('ExperienceCtrl', ['$scope', '$routeParams',
                                           function($scope, $routeParams) {
                                             $scope.name = "Vincent";
                                           }]);

homeControllers.controller('PortofolioCtrl', ['$scope', '$routeParams',
                                           function($scope, $routeParams) {
                                             $scope.name = "Vincent";
                                           }]);

homeControllers.controller('SkillsCtrl', ['$scope', '$routeParams',
                                           function($scope, $routeParams) {
                                             $scope.name = "Vincent";
                                           }]);