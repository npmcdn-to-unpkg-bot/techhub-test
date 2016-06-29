angular.module('techhubApp').controller('MeetingCtrl',function(rooms,$timeout){
    var vm = this;
    var meetingRooms = rooms.getRooms();
    vm.rooms = [];

    meetingRooms.then(function(response){
        $timeout(function(){
            vm.rooms = response.items;
            setMasonry();
        },800);
    });

    vm.isOpen = function(opening,closing){
        return opening.split("T")[1] + " - " + closing.split("T")[1];
    }


    var selectedRoom = null;

    vm.selectRoom = function(room){
        setMasonry();
        selectedRoom = (selectedRoom === room) ? null : room;
    }

    vm.isSelected = function(room){
        return room === selectedRoom;

    }
});
