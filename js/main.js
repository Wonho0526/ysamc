AOS.init({
    disable: function () {
        return window.innerWidth <= 600;
    }
});



$(".gnb > li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");
    // $(this).siblings().css({ padding: "0 35px" });
    $(".gnb > li").addClass("wide")
    // $(".gnb > li.active").css({ padding: "0 35px" });
    $(".depth2").fadeIn();
    $(".bg").stop().slideDown();
});


$("#header").mouseleave(function () {
    $(".gnb > li").removeClass("active, wide")//.siblings().css({ padding: "0 20px" });
    $(".bg").stop().slideUp();
    $(".depth2").stop().fadeOut();
});

$(".m_gnb > li > a").click(function () {
    $(".m_depth2").stop().hide()
    $(this).siblings(".m_depth2").stop().fadeToggle(300)
});

$(".m_button").click(function () {
    $(".m_menu").animate({ "right": "0" }, 500)
});

$(".btn_close").click(function () {
    $(".m_menu").animate({ "right": "-100%" }, 500)
});

const veterinarian_list = new Swiper(".veterinarian_list", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    speed: 10000,


});



const review_list = new Swiper(".review_list", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        600: {
            spaceBetween: 50,
        },
    },
    speed: 10000,
});

$(".case_list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
});

$(".list_all").click(function () {
    $(".case_post li").stop().fadeIn()
    $(".non").stop().hide()
});
$(".heart_list").click(function () {
    $(".case_post li").fadeOut();
    $(".heart").closest("li").fadeIn();
});
$(".bone_list").click(function () {
    $(".case_post li").fadeOut();
    $(".bone").closest("li").fadeIn();
});
$(".cat_list").click(function () {
    $(".case_post li").fadeOut();
    $(".cat").closest("li").fadeIn();
});
$(".skin_list").click(function () {
    $(".case_post li").fadeOut();
    $(".skin").closest("li").fadeIn();
});
$(".non_list").click(function () {
    $(".case_post li").fadeOut();
    $(".non").closest("li").fadeIn();
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

$(".different ul li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");
    //현재 hover된 li의 인덱스를 기반으로 새로운 클래스 이름 (예: .dif1, .dif2) 생성
    let dif = $(".different ul li").index(this) + 1;
    let newClass = "dif" + dif;
    removeDifClasses($(".different ul"));
    $(".different ul").stop().addClass(newClass);
});

//'.dif'로 시작하는 클래스를 제거하는 함수
function removeDifClasses(jQueryObject) {
    const classes = jQueryObject.attr('class');
    if (!classes) return;

    // '.dif'로 시작하고 뒤에 숫자가 오는 클래스를 찾는 정규 표현식
    const regex = /\bdif\d+\b/g;

    // 일치하는 클래스들을 빈 문자열로 대체
    const newClasses = classes.replace(regex, '');

    // 새로운 클래스 목록으로 업데이트
    jQueryObject.attr('class', newClasses.trim());
}

