var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1500
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


