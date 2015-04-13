'use strict';

/* Services */

var homeServices = angular.module('homeServices', ['ngResource']);

homeServices.factory('CV', ['$resource',
  function($resource){
    return $resource('/app/json/wheel.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
