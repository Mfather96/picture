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
        })
        nextBtn.addEventListener('click', () => {
            showSlide(1);
            slides[slideIndex - 1].classList.remove('slideInLeftCustom');
            slides[slideIndex - 1].classList.add('slideInRightCustom');

        })
    } catch(e) {}

    function activatedAnimation() {
        if (direction === 'vertical') {
            pauseSliderAnimation = setInterval(function() {
                showSlide(1);
                slides[slideIndex - 1].classList.add('slideInDown');
            }, timeInterval)
        } else {
            pauseSliderAnimation = setInterval(function() {
                showSlide(1);
                slides[slideIndex - 1].classList.remove('slideInLeftCustom');
                slides[slideIndex - 1].classList.add('slideInRightCustom');
            }, timeInterval)
        }
    }
    activatedAnimation();

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(pauseSliderAnimation);
    })
    slides[0].parentNode.addEventListener('mouseleave', () => {
        activatedAnimation();
    })
};

export default slider;
