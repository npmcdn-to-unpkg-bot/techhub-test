'use strict';

angular.module('techhubApp').directive('navbar',function(){
    return {
        restrict: 'E',
        templateUrl: "views/navbar.html",
        controller: 'NavigationCtrl' 
    }
});
