// Initialize Swiper slider
document.addEventListener("DOMContentLoaded", function () {
    const testimonialSliderflags = new Swiper(".testimonial-slider-flags", {
        spaceBetween: 10,
        speed: 1000,
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
            delay: 15000000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            485: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
});
