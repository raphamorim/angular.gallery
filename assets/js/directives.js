'use strict';

/* Directives */

angular.module('myApp.directives', [])

  .directive('mainInfo', function() {
    return {
      template: '<strong>{{mainApp.name}}</strong> by <strong>{{mainApp.author}}</strong>'
    };
  });
