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
        })

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
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
            })
        })

        modalClose.addEventListener('click', () => {
            windows.forEach(window => window.style.display = 'none');
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(window => window.style.display = 'none');

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(modal => {
                if (getComputedStyle(modal).display !== 'none') {
                    display = getComputedStyle(modal).display;
                }
            })

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }

        }, time)
    }

    function calcScrollWidth() {
        const div = document.createElement('div');
        div.style.cssText = `
            width: 100px;
            height: 100px;
            overflow-y: scroll;
            visibility: hidden;
        `
        document.body.appendChild(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    function scrollDown(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!isAnyBtnPressed && (window.scrollY + document.documentElement.clientHeight) >= scrollHeight) {
                document.querySelector(selector).click();
                // document.querySelector(selector).
            }
        })
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    scrollDown('.fixed-gift');
    // showModalByTime('.popup-consultation', 4000);
};

export default modals;
