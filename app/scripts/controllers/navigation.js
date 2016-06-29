'use strict';

angular.module('techhubApp').controller('NavigationCtrl',function($scope,$location){

    $scope.isActive = function(path){
        return path === $location.path();
    }
});
