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

// ==================== DYNAMIC PRODUCT DATA UPDATE LOGIC======================================= //

/* Quick View Modal Popup Dynamic Information Logic */
document.querySelectorAll('.btn[title="Quick View"]').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const productItem = button.closest('.ltn__product-item');

        // Extract product details using IDs
        const productImgSrc = productItem.querySelector('#product-img').getAttribute('src');
        const productTitle = productItem.querySelector('#product-title').textContent;
        const productDescription = productItem.querySelector('#product-description').textContent;
        const productBrand = productItem.querySelector('#modal-product-brand')?.textContent || 'N/A';
        const productWeight = productItem.querySelector('#modal-product-weight').textContent;
        const productCategory = productItem.querySelector('#modal-product-category').textContent;
        const productType = productItem.querySelector('#modal-product-type')?.textContent || 'N/A';

        // Update modal content
        document.querySelector('#quick_view_modal #product-img').setAttribute('src', productImgSrc);
        document.querySelector('#quick_view_modal #product-title').textContent = productTitle;
        document.querySelector('#quick_view_modal #product-description').textContent = productDescription;
        document.querySelector('#quick_view_modal #modal-product-brand').textContent = productBrand;
        document.querySelector('#quick_view_modal #modal-product-weight').textContent = productWeight;
        document.querySelector('#quick_view_modal #modal-product-category').textContent = productCategory;
        document.querySelector('#quick_view_modal #modal-product-type').textContent = productType;
    });
});

/* Enquiry Now Modal Popup Dynamic Information Logic */
document.querySelectorAll('.btn[title="enquiry Now"]').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const productItem = button.closest('.ltn__product-item');

        // Extract product details using IDs or Classes
        const productImgSrc = productItem.querySelector('#product-img')?.getAttribute('src') || '';
        const productTitle = productItem.querySelector('#product-title')?.textContent || 'N/A';
        const productDescription = productItem.querySelector('#product-description')?.textContent || 'N/A';
        const productBrand = productItem.querySelector('#modal-product-brand')?.textContent || 'N/A';
        const productWeight = productItem.querySelector('#modal-product-weight')?.textContent || 'N/A';
        const productCategory = productItem.querySelector('#modal-product-category')?.textContent || 'N/A';
        const productType = productItem.querySelector('#modal-product-type')?.textContent || 'N/A';

        // Update modal content
        const enquiryModal = document.querySelector('#enquiry_now_modal');
        enquiryModal.querySelector('#product-img')?.setAttribute('src', productImgSrc);
        enquiryModal.querySelector('#product-title')?.setAttribute('value', productTitle);
        enquiryModal.querySelector('#modal-product-weight')?.setAttribute('value', productWeight);
    });
});
