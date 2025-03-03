import modals from "./modules/modals";
import slider from "./modules/slider";
import formsModule from "./modules/forms";
import mask from "./modules/mask";
import checkText from "./modules/checkText";
import showMore from "./modules/showMore";

window.addEventListener('DOMContentLoaded', () => {
    modals();

    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    formsModule();
    mask('[name="phone"]');
    checkText('[name="name"]');
    checkText('[name="message"]');

    showMore('.button-styles', '#styles .row')
})
