import modals from "./modules/modals";
import slider from "./modules/slider";
import formsModule from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    modals();

    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    formsModule();
})
