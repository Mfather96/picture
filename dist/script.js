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
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkText */ "./src/js/modules/checkText.js");
/* harmony import */ var _modules_showMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMore */ "./src/js/modules/showMore.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordeon */ "./src/js/modules/accordeon.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");












window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  // checkText('[name="name"]');
  // checkText('[name="message"]');

  Object(_modules_showMore__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  Object(_modules_accordeon__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
  Object(_modules_scroll__WEBPACK_IMPORTED_MODULE_11__["default"])();
});

/***/ }),

/***/ "./src/js/modules/accordeon.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordeon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordeon = item => {
  const items = document.querySelectorAll(item);
  items.forEach(item => {
    item.addEventListener('click', function () {
      items.forEach(item => {
        if (item !== this) {
          collapseAll(item);
        }
      });
      if (!this.classList.contains('active')) {
        expandBlock(this);
      } else {
        collapseAll(this);
      }
    });
  });
  function collapseAll(item) {
    item.classList.remove('active');
    item.nextElementSibling.classList.remove('active');
    item.nextElementSibling.style.maxHeight = '0px';
  }
  function expandBlock(item) {
    item.classList.add('active');
    item.nextElementSibling.classList.add('active');
    item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 80 + 'px';
  }
};
/* harmony default export */ __webpack_exports__["default"] = (accordeon);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (menuSelector, burgerSelector) => {
  const menu = document.querySelector(menuSelector);
  const burger = document.querySelector(burgerSelector);
  menu.style.display = 'none';
  burger.addEventListener('click', () => {
    if (menu.style.display == 'none' && window.screen.availWidth < 993) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menu.style.display = 'none';
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);
  function calcPrice() {
    let sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (!sizeBlock.value || !materialBlock.value) {
      resultBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7) + 'руб';
    } else {
      resultBlock.textContent = Math.round(sum) + 'руб';
    }
  }
  sizeBlock.addEventListener('change', calcPrice);
  materialBlock.addEventListener('change', calcPrice);
  optionsBlock.addEventListener('change', calcPrice);
  promocodeBlock.addEventListener('input', calcPrice);
};
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/checkText.js":
/*!*************************************!*\
  !*** ./src/js/modules/checkText.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkText = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    // input.addEventListener('keypress', (e) => {
    //     console.log(!e.key.match(/[^а-яё 0-9]/ig));
    //     if (e.key.match(/[^а-яё 0-9]/ig)) {
    //         // e.preventDefault();
    //     } else if (!input.value.match(/[^а-яё 0-9]/ig)) {
    //         input.value = '';
    //     }
    // })

    input.addEventListener('input', () => {
      if (!input.value.match(/[^а-яё 0-9]/ig)) {
        console.log('here');
        input.value = '';
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkText);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    menuItems = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    no = document.querySelector('.portfolio-no');
  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      const target = e.target;
      if (target && target.tagName === 'LI') {
        removeAll();
        const activeClass = target.classList.value;
        target.classList.add('active');
        if (activeClass === 'grandmother' || activeClass === 'granddad') {
          no.style.display = 'block';
          no.classList.add('animated', 'fadeIn');
          return;
        }
        wrapper.querySelectorAll('.' + activeClass).forEach(elem => {
          elem.style.display = 'block';
          elem.classList.add('animated', 'fadeIn');
        });
      }
    });
  });
  function removeAll() {
    menuItems.forEach(item => item.classList.remove('active'));
    if (no) {
      no.style.display = 'none';
      no.classList.remove('animated', 'fadeIn');
    }
    wrapper.querySelectorAll('.portfolio-block.all').forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const formsModule = () => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    uploadInputs = document.querySelectorAll('[name="upload"]'),
    selects = document.querySelectorAll('select');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Мы скоро с вами свяжемся',
    failure: 'Приносим извинения, но наш сервер не работает',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
    spinner: 'assets/img/spinner.gif'
  };
  uploadInputs.forEach(input => {
    input.addEventListener('input', () => {
      let fileName = input.files[0].name.split('.').map(word => word.length > 5 ? `${word.slice(0, 5)}..` : word).join('.');
      input.previousElementSibling.textContent = fileName;
    });
  });
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const api = form.closest('.popup-design') || form.classList.contains('calc-form') ? 'assets/designer.php' : 'assets/server.php';
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      const statusImg = document.createElement('img');
      statusImg.src = message.spinner;
      statusMessage.appendChild(statusImg);
      const statusText = document.createElement('div');
      statusText.textContent = message.loading;
      statusMessage.appendChild(statusText);
      form.parentNode.appendChild(statusMessage);
      form.style.display = 'none';
      const formData = new FormData(form);
      console.log(formData);
      selects.forEach(select => {
        formData.append(select.getAttribute('id'), select.value);
      });
      if (form.querySelector('[name="total-price"]')) {
        formData.append('price', form.querySelector('[name="total-price"]').textContent);
      }
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(response => {
        console.log(response);
        statusText.textContent = message.success;
        statusImg.src = message.ok;
      }).catch(() => {
        statusText.textContent = message.failure;
        statusImg.src = message.fail;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          form.style.display = 'block';
        }, 2000);
      });
    });
  });
  function clearInputs() {
    inputs.forEach(input => {
      input.value = '';
    });
    uploadInputs.forEach(input => {
      input.previousElementSibling.textContent = '';
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (formsModule);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (elem, pos) => {
    elem.focus();
    let localPos = pos;
    if (pos < 2) {
      localPos = 2;
    }
    if (elem.setSelectionRange) {
      elem.setSelectionRange(localPos, localPos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', localPos);
      range.moveStart('character', localPos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, ''),
      varib = '';
    if (def.length >= val.length) {
      val = def;
    }
    varib = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (!varib.startsWith('+7')) {
      this.value = '+7';
    } else {
      this.value = varib;
    }
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this, this.value.length);
    }
  }
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
    input.addEventListener('click', createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

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
        // document.querySelector(selector).
      }
    });
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  scrollDown('.fixed-gift');
  // showModalByTime('.popup-consultation', 4000);
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }
  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = () => {
  const upElem = document.querySelector('.pageup');
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMore.js":
/*!************************************!*\
  !*** ./src/js/modules/showMore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const showMore = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);
  btn.addEventListener('click', async function () {
    await Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getData"])('http://localhost:3000/styles').then(response => {
      console.log(response);
      createCards(response);
    }).catch(e => {
      throw new Error(e);
    });
    this.remove();
  });
  function createCards(response) {
    response.forEach(({
      src,
      title,
      link
    }) => {
      const card = document.createElement('div');
      console.log(src, title, link);
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (showMore);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (slidesSelector, direction, prev, next, timeInterval = 10000) => {
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

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
async function postData(url, data) {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
}
async function getData(url) {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error('Some trobles with server');
  }
  return await res.json();
}


/***/ })

/******/ });
//# sourceMappingURL=script.js.map