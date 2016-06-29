angular.module('techhubApp').factory('events',function($http){
     return $http.get('/api');
});
