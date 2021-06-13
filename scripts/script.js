(function () {
    // Elements
    var aside = document.querySelector("aside.social");
    // Events
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 450) {
            aside.classList.add("dark");
        }
        else {
            aside.classList.remove("dark");
        }
    });
})();
(function () {
    var modalSend = document.querySelector("#after-send");
    var modalForm = document.querySelector("#form");
    $("form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            showFormComplete();
            $("form").trigger("reset");
        });
        return false;
    });
    function showFormComplete() {
        if (modalSend.parentElement.classList.contains("hide")) {
            modalSend.parentElement.classList.remove("hide");
        }
        if (!modalForm.classList.contains("hide")) {
            modalForm.classList.add("hide");
        }
        modalSend.classList.remove("hide");
        document.documentElement.classList.add("overflow-hidden");
    }
})();
(function () {
    var hamburger = document.querySelector(".hamburger");
    var menuClose = document.querySelector(".promo__nav-close");
    var nav = document.querySelector("nav.promo__nav");
    hamburger.addEventListener("click", function () {
        nav.classList.add("show-menu");
    });
    nav.addEventListener("click", function (e) {
        var t = e.target;
        if (t && t.matches(".promo__nav-item")) {
            nav.classList.remove("show-menu");
        }
    });
    menuClose.addEventListener("click", function () {
        nav.classList.remove("show-menu");
    });
})();
(function () {
    // Elements
    var overlay = document.querySelector("section.overlay");
    var modals = overlay.querySelectorAll(".modal");
    var modalForm = overlay.querySelector("#form");
    var dataModalBtns = document.querySelectorAll("[data-modal]");
    // Events
    dataModalBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            overlay.classList.remove("hide");
            modalForm.classList.remove("hide");
            document.documentElement.classList.add("overflow-hidden");
        });
    });
    overlay.addEventListener("click", function (e) {
        var t = e.target;
        if (t && (t.matches("[data-close]") || t.matches(".overlay"))) {
            overlay.classList.add("hide");
            modals.forEach(function (modal) {
                modal.classList.add("hide");
            });
            document.documentElement.classList.remove("overflow-hidden");
        }
    });
})();
/* Индекс слайда по умолчанию */
var slideIndex = 1;
// showSlides(slideIndex);
var intervalID = setInterval(showByInterval, 5000);
function showByInterval() {
    showSlides((slideIndex += 1));
}
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    clearInterval(intervalID);
    intervalID = setInterval(showByInterval, 5000);
    showSlides((slideIndex += 1));
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    clearInterval(intervalID);
    intervalID = setInterval(showByInterval, 5000);
    showSlides((slideIndex -= 1));
}
/* Устанавливает текущий слайд */
function currentSlide(n) {
    clearInterval(intervalID);
    intervalID = setInterval(showByInterval, 5000);
    showSlides((slideIndex = n));
}
/* Основная функция слайдера */
function showSlides(n) {
    var slides = document.querySelectorAll(".about__img");
    var dots = document.querySelectorAll(".about__slider-dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(function (slide, i) {
        slide.classList.add("d-none");
        if (i == slideIndex - 1) {
            slide.classList.remove("d-none");
        }
    });
    dots.forEach(function (dot, i) {
        dot.classList.remove("active");
        if (i == slideIndex - 1) {
            dot.classList.add("active");
        }
    });
}
(function () {
    var toTopBtn = toTopBtnTemplate();
    toTopBtn.addEventListener("click", function () {
        document.scrollingElement.scrollTop = 0;
    });
    document.body.insertAdjacentElement("beforeend", toTopBtn);
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 1280) {
            toTopBtn.classList.add("show");
        }
        else {
            toTopBtn.classList.remove("show");
        }
    });
    function toTopBtnTemplate() {
        var toTop = document.createElement("div");
        toTop.classList.add("to-top");
        var toTopBtn = document.createElement("button");
        toTopBtn.classList.add("to-top-btn");
        toTopBtn.innerHTML = "<i class=\"fas fa-arrow-up\"></i>";
        toTop.appendChild(toTopBtn);
        return toTop;
    }
})();
