function setMasonry(){
    setTimeout(function(){
        $('.room-grid').isotope({
            itemSelector: '.room-card',
            percentPosition: true,
        });
    },150);
}
