
(function($) {
    "use strict";

    $(document).ready( function() {

         const testimonialSliderflags = new Swiper(".testimonial-slider-flags", {
            spaceBetween: 10,
            speed: 1000,
            loop: true,  
            slidesPerView: 1,  
            centeredSlides: true,  
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {

                485: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3, 
                },
                1200: {
                    slidesPerView: 6,
                }
            }
        });
    });
})
