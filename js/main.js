AOS.init();

$(".gnb > li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(this).siblings().css({ padding: "0 35px" });
    $(".gnb > li.active").css({ padding: "0 35px" });
    $(".depth2").fadeIn();
    $(".bg").stop().slideDown();
});


$("#header").mouseleave(function () {
    $(".gnb > li").removeClass("active").siblings().css({ padding: "0 20px" });
    $(".bg").stop().slideUp();
    $(".depth2").stop().fadeOut();
});

const veterinarian_list = new Swiper(".veterinarian_list", {
    slidesPerView: 4.5,
    spaceBetween: 50,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 6000,

});


const review_list = new Swiper(".review_list", {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 15000,
});

$(".case_list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
});

const facility_list = new Swiper(".facility_list", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".facility-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".facility-next",
        prevEl: ".facility-prev",
    },
});

$(".special li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active")
    $(this).find(".black").stop().fadeOut()
    $(this).find("p").stop().fadeIn(500)
});
$(".special li").mouseleave(function () {
    $(this).removeClass("active")
    $(this).find(".black").stop().fadeIn()
    $(this).find("p").stop().fadeOut()
});