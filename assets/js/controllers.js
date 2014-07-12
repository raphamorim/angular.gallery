'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('Main', function($scope, $http, $sce) {
    $http({method: 'GET', url: 'gallery/gallery.json'})
    .success(function(data) {
        $scope.apps = data.apps,
        $scope.random = Math.floor(Math.random() * $scope.apps.length),
        $scope.mainApp = {
          name: $scope.apps[$scope.random].name,
          author: $scope.apps[$scope.random].author,
          url: $sce.trustAsResourceUrl($scope.apps[$scope.random].url),
          repository: $scope.apps[$scope.random].repository
        };
    });
})
