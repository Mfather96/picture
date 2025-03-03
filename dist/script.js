/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");


window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
});

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let isAnyBtnPressed = false;
  function bindModal(triggerSelector, modalSelector, modalCloseSelector, destroy = false) {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      modalClose = document.querySelector(modalCloseSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scrollWidth = calcScrollWidth();
    modal.querySelector('.popup-content').classList.add('topFade');
    windows.forEach(window => {
      window.classList.add('opacityFade');
    });
    triggers.forEach(trigger => {
      trigger.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        if (!isAnyBtnPressed) {
          isAnyBtnPressed = true;
        }
        if (destroy) {
          trigger.remove();
        }
        windows.forEach(window => window.style.display = 'none');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
      });
    });
    modalClose.addEventListener('click', () => {
      windows.forEach(window => window.style.display = 'none');
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(window => window.style.display = 'none');
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal]').forEach(modal => {
        if (getComputedStyle(modal).display !== 'none') {
          display = getComputedStyle(modal).display;
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    }, time);
  }
  function calcScrollWidth() {
    const div = document.createElement('div');
    div.style.cssText = `
            width: 100px;
            height: 100px;
            overflow-y: scroll;
            visibility: hidden;
        `;
    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function scrollDown(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      if (!isAnyBtnPressed && window.scrollY + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-consultation .popup-close', true);
  scrollDown('.fixed-gift');
  // showModalByTime('.popup-consultation', 4000);
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (slidesSelector, direction, prev, next, timeInterval = 3000) => {
  const slides = document.querySelectorAll(slidesSelector);
  let slideIndex = 1;
  let pauseSliderAnimation = false;
  slides.forEach(slide => slide.classList.add('animated'));
  showSlide(slideIndex);
  function showSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
  }
  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      showSlide(-1);
      slides[slideIndex - 1].classList.remove('slideInRightCustom');
      slides[slideIndex - 1].classList.add('slideInLeftCustom');
    });
    nextBtn.addEventListener('click', () => {
      showSlide(1);
      slides[slideIndex - 1].classList.remove('slideInLeftCustom');
      slides[slideIndex - 1].classList.add('slideInRightCustom');
    });
  } catch (e) {}
  function activatedAnimation() {
    if (direction === 'vertical') {
      pauseSliderAnimation = setInterval(function () {
        showSlide(1);
        slides[slideIndex - 1].classList.add('slideInDown');
      }, timeInterval);
    } else {
      pauseSliderAnimation = setInterval(function () {
        showSlide(1);
        slides[slideIndex - 1].classList.remove('slideInLeftCustom');
        slides[slideIndex - 1].classList.add('slideInRightCustom');
      }, timeInterval);
    }
  }
  activatedAnimation();
  slides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(pauseSliderAnimation);
  });
  slides[0].parentNode.addEventListener('mouseleave', () => {
    activatedAnimation();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map