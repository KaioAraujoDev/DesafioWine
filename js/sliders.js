$(document).ready(function() {
    $('.SliderPresentation').slick({
        autoplay:true,
        dots:true
    });
});

$(document).ready(function() {
    $('.SliderServices').slick({
        centerMode:true,
        centerPadding:'12.5%',
        dots:true
    });
});

function createSliderProducts(){
    $('.listProducts').slick({
        centerMode:true
    });
} 

