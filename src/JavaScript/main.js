'use strict';
const slider = (sliderName, slidesName) => {
    const slider = document.querySelector(sliderName);
    const slides = slider.querySelectorAll(slidesName);

    const slideSwitch = (slider, side) => {
        let indexSide;
        slides.forEach((element, index) => {
            if (element === slider) {
                indexSide = index;
                console.log('indexSide: ', indexSide);
            }
        });
        
        const prevIndex = (indexSide - 1 < 0) ? slides.length - 1 : indexSide - 1;
        const nextIndex = (slides.length <= indexSide + 1) ? 0 : indexSide + 1;
        
        if (side === 'left') {
            slides[prevIndex].classList.remove('travel-slider__right');
            slides[nextIndex].classList.remove('travel-slider__center');
            slides[indexSide].classList.remove('travel-slider__left');

            slides[prevIndex].classList.add('travel-slider__left');
            slides[nextIndex].classList.add('travel-slider__right');
            slides[indexSide].classList.add('travel-slider__center');


            slides[prevIndex].querySelector('.travel-slider__image').classList.remove('travel-slider__image-right');
            slides[nextIndex].querySelector('.travel-slider__image').classList.remove('travel-slider__image-center');
            slides[indexSide].querySelector('.travel-slider__image').classList.remove('travel-slider__image-left');

            slides[prevIndex].querySelector('.travel-slider__image').classList.add('travel-slider__image-left');
            slides[nextIndex].querySelector('.travel-slider__image').classList.add('travel-slider__image-right');
            slides[indexSide].querySelector('.travel-slider__image').classList.add('travel-slider__image-center');

            slides.forEach( (element, index) => {
                const textBlock = element.querySelector('.travel-slider__block');
                textBlock.classList.add('travel-slider-hidden');
                if (index === indexSide) {
                    element.querySelector('.travel-slider__block').classList.remove('travel-slider-hidden');
                }
            });
        } else if (side === 'right') {
            slides[prevIndex].classList.remove('travel-slider__center');
            slides[nextIndex].classList.remove('travel-slider__left');
            slides[indexSide].classList.remove('travel-slider__right');

            slides[prevIndex].classList.add('travel-slider__left');
            slides[nextIndex].classList.add('travel-slider__right');
            slides[indexSide].classList.add('travel-slider__center');

            slides[prevIndex].querySelector('.travel-slider__image').classList.remove('travel-slider__image-center');
            slides[nextIndex].querySelector('.travel-slider__image').classList.remove('travel-slider__image-left');
            slides[indexSide].querySelector('.travel-slider__image').classList.remove('travel-slider__image-right');

            slides[prevIndex].querySelector('.travel-slider__image').classList.add('travel-slider__image-left');
            slides[nextIndex].querySelector('.travel-slider__image').classList.add('travel-slider__image-right');
            slides[indexSide].querySelector('.travel-slider__image').classList.add('travel-slider__image-center');

            slides.forEach( (element, index) => {
                const textBlock = element.querySelector('.travel-slider__block');
                textBlock.classList.add('travel-slider-hidden');
                if (index === indexSide) {
                    element.querySelector('.travel-slider__block').classList.remove('travel-slider-hidden');
                }
            });
        }
    };

    const mouseСlick = () => {
        slider.addEventListener('click', (event) => {
            const target = event.target;
            if (target.closest('.travel-slider__image-left')) {
                slideSwitch(target.closest('.travel-slider__slide'), 'left');
            } else if (target.closest('.travel-slider__image-right')) {
                slideSwitch(target.closest('.travel-slider__slide'), 'right');
            } 
        });
    };
    mouseСlick();
}
slider('.travel-slider', '.travel-slider__slide');