var owl = $('.owl-carousel');

$(owl).owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.reviews-btn__next').click(function () {
    owl.trigger('next.owl.carousel');
})