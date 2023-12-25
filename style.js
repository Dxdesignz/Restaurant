$(document).ready(function () {
    $(".ul").mouseenter(function () {
        $(".data").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#menu").click(function () {
        $(".link").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#search-icon").click(function () {
        $(".search").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#profile").click(function () {
        $(".button").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#play-btn").click(function () {
        $(".video").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#close").click(function () {
        $(".video").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#arrow1").click(function () {
        $("#nav1").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#arrow2").click(function () {
        $("#nav2").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#arrow3").click(function () {
        $("#nav3").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#arrow4").click(function () {
        $("#nav4").slideToggle("slow");
    });
});






function clickable() {
    document.getElementById("catebox").style.boxShadow = "0px 10px 15px #fa552842";
    document.getElementById("catebox").style.border = "3px solid var(---red)";
    document.getElementById("icon").style.background = "var(---red)";
    document.getElementById("icon").style.border = "1px solid var(---white)";
    document.getElementById("icon").style.boxShadow = "0px 10px 15px #fa552842";
}

function clickable2() {
    document.getElementById("catebox2").style.boxShadow = "0px 10px 15px #fa552842";
    document.getElementById("catebox2").style.border = "3px solid var(---red)";
    document.getElementById("icon2").style.background = "var(---red)";
    document.getElementById("icon2").style.border = "1px solid var(---white)";
    document.getElementById("icon2").style.boxShadow = "0px 10px 15px #fa552842";
}

function clickable3() {
    document.getElementById("catebox3").style.boxShadow = "0px 10px 15px #fa552842";
    document.getElementById("catebox3").style.border = "3px solid var(---red)";
    document.getElementById("icon3").style.background = "var(---red)";
    document.getElementById("icon3").style.border = "1px solid var(---white)";
    document.getElementById("icon3").style.boxShadow = "0px 10px 15px #fa552842";
}

function clickable4() {
    document.getElementById("catebox4").style.boxShadow = "0px 10px 15px #fa552842";
    document.getElementById("catebox4").style.border = "3px solid var(---red)";
    document.getElementById("icon4").style.background = "var(---red)";
    document.getElementById("icon4").style.border = "1px solid var(---white)";
    document.getElementById("icon4").style.boxShadow = "0px 10px 15px #fa552842";
}

var swiper = new Swiper(".menu-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        350: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50,
        },

    },
});




