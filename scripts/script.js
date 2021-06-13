var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    var forms = document.querySelectorAll("form.form");
    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var data = collectFormData(form);
            console.log(data);
            sendMail(data)
                .then(function (res) {
                form.reset();
                showFormComplete();
            })["catch"](function (err) { return showFormComplete(); });
        });
    });
    // $("form").submit(function (e) {
    //   e.preventDefault();
    //   $.ajax({
    //     type: "POST",
    //     url: "mailer/smart.php",
    //     data: $(this).serialize(),
    //   }).done(function () {
    //     $(this).find("input").val("");
    //     showFormComplete();
    //     $("form").trigger("reset");
    //   });
    //   return false;
    // });
    function collectFormData(form) {
        var inputs = form.querySelectorAll("input:not([type=\"checkbox\"]), textarea");
        var data = {};
        inputs.forEach(function (item) {
            var input = item;
            data[input.name] = input.value;
        });
        return data;
    }
    function sendMail(data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(JSON.stringify(data));
                        return [4 /*yield*/, fetch("mailer/smart.php", {
                                method: "POST",
                                // headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(data)
                            })];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
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
