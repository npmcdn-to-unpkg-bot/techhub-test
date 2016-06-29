angular.module('techhubApp').controller('BookingCtrl',function(){
    var vm = this;
    vm.slots = ['8:30','9:00','9:30','10:00','10:30','11:00','11:30'];
    vm.selectSlot = function(event){
        $(event.target).toggleClass('selected');
    }

    vm.checkSlots = function(){
        var selectedSlots = document.getElementsByClassName('selected');
        var button = document.getElementById('book-button');
        if(selectedSlots.length < 2){
            $(button).addClass('disabled');
        }else{
            $(button).removeClass('disabled');
        }
    }
});
