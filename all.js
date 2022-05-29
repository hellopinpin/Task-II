$(document).ready(function () {
    $('.top').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:0 }, 1000)    
        
    });
    
    
});


