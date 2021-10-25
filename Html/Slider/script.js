$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartSpeed: 2000,                  // if need only
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
