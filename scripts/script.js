(function () {
    const aside = document.querySelector("aside.social");
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 450) {
            aside.classList.add("dark");
        }
        else {
            aside.classList.remove("dark");
        }
    });
})();
(function () {
    const modalSend = document.querySelector("#after-send");
    const modalForm = document.querySelector("#form");
    $("form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize(),
            headers: { "Permissions-Policy": "interest-cohort=()" },
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
    const hamburger = document.querySelector(".hamburger");
    const menuClose = document.querySelector(".promo__nav-close");
    const nav = document.querySelector("nav.promo__nav");
    hamburger.addEventListener("click", () => {
        nav.classList.add("show-menu");
    });
    nav.addEventListener("click", (e) => {
        const t = e.target;
        if (t && t.matches(".promo__nav-item")) {
            nav.classList.remove("show-menu");
        }
    });
    menuClose.addEventListener("click", () => {
        nav.classList.remove("show-menu");
    });
})();
(function () {
    const overlay = document.querySelector("section.overlay");
    const modals = overlay.querySelectorAll(".modal");
    const modalForm = overlay.querySelector("#form");
    const dataModalBtns = document.querySelectorAll("[data-modal]");
    dataModalBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            overlay.classList.remove("hide");
            modalForm.classList.remove("hide");
            document.documentElement.classList.add("overflow-hidden");
        });
    });
    overlay.addEventListener("click", (e) => {
        const t = e.target;
        if (t && (t.matches("[data-close]") || t.matches(".overlay"))) {
            overlay.classList.add("hide");
            modals.forEach((modal) => {
                modal.classList.add("hide");
            });
            document.documentElement.classList.remove("overflow-hidden");
        }
    });
})();
let slideIndex = 1;
let intervalID = setInterval(showByInterval, 5000);
function showByInterval() {
    showSlides((slideIndex += 1));
}
function plusSlide() {
    clearInterval(intervalID);
    intervalID = setInterval(showByInterval, 5000);
    showSlides((slideIndex += 1));
}
function minusSlide() {
    clearInterval(intervalID);
    intervalID = setInterval(showByInterval, 5000);
    showSlides((slideIndex -= 1));
}
function currentSlide(n) {
    clearInterval(intervalID);
    intervalID = setInterval(showByInterval, 5000);
    showSlides((slideIndex = n));
}
function showSlides(n) {
    const slides = document.querySelectorAll(".about__img");
    const dots = document.querySelectorAll(".about__slider-dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((slide, i) => {
        slide.classList.add("d-none");
        if (i == slideIndex - 1) {
            slide.classList.remove("d-none");
        }
    });
    dots.forEach((dot, i) => {
        dot.classList.remove("active");
        if (i == slideIndex - 1) {
            dot.classList.add("active");
        }
    });
}
(function () {
    const toTopBtn = toTopBtnTemplate();
    toTopBtn.addEventListener("click", () => {
        document.scrollingElement.scrollTop = 0;
    });
    document.body.insertAdjacentElement("beforeend", toTopBtn);
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 1280) {
            toTopBtn.classList.add("show");
        }
        else {
            toTopBtn.classList.remove("show");
        }
    });
    function toTopBtnTemplate() {
        const toTop = document.createElement("div");
        toTop.classList.add("to-top");
        const toTopBtn = document.createElement("button");
        toTopBtn.classList.add("to-top-btn");
        toTopBtn.innerHTML = `<i class="fas fa-arrow-up"></i>`;
        toTop.appendChild(toTopBtn);
        return toTop;
    }
})();
