angular.module('techhubApp').controller('EventCtrl',function(events){
    var vm = this;
    vm.events = [];

    events.then(function(response){
        vm.events = response.data;
    });
});
