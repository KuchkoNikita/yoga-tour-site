'use strict';
const bigSlider = (sliderName, slidesName) => {
    const slider = document.querySelector(sliderName);
    const slides = slider.querySelectorAll(slidesName);
    let interval;

    const deletingSlideСlasses = () => {
        slides.forEach((element)=> {
            element.classList = 'big-slider__slide';
        });
    };

    const deletingImageСlasses = () => {
        slides.forEach((element)=> {
            element.querySelector('.big-slider__image').classList = 'big-slider__image';
        });
    };

    const addSlideСlasses = (prevIndex, nextIndex, nowSide) => {
        slides[prevIndex].classList.add('big-slider__left');
        slides[nextIndex].classList.add('big-slider__right');
        slides[nowSide].classList.add('big-slider__center');
    };

    const addImageСlasses = (prevIndex, nextIndex, nowSide) => {
        slides[prevIndex].querySelector('.big-slider__image').classList.add('big-slider__image-left');
        slides[nextIndex].querySelector('.big-slider__image').classList.add('big-slider__image-right');
        slides[nowSide].querySelector('.big-slider__image').classList.add('big-slider__image-center');
    };

    const hideText = (nowIndex) => {
        slides.forEach( (element, index) => {
            const textBlock = element.querySelector('.big-slider__block');
            textBlock.classList.add('big-slider-hidden');
            if (index === nowIndex) {
                element.querySelector('.big-slider__block').classList.remove('big-slider-hidden');
            }
        });
    };

    const slideSwitch = (slider) => {
        let nowIndex;
        slides.forEach((element, index) => {
            if (element === slider) {
                nowIndex = index;
            }
        });

        const prevIndex = (nowIndex - 1 < 0) ? slides.length - 1 : nowIndex - 1;
        const nextIndex = (slides.length <= nowIndex + 1) ? 0 : nowIndex + 1;
        
        
        deletingSlideСlasses();
        deletingImageСlasses();
            
        addSlideСlasses(prevIndex, nextIndex, nowIndex);
        addImageСlasses(prevIndex, nextIndex, nowIndex);
        hideText(nowIndex);
    };

    const autoSwitch = (time = 5000) => {
        interval = setInterval(() => {
            const rightSlider = slider.querySelector('.big-slider__right');
            slideSwitch(rightSlider, 'right');
        }, time);
    };
    autoSwitch(5000);

    const mouseСlick = () => {
        slider.addEventListener('click', (event) => {
            const target = event.target;
            if (target.closest('.big-slider__image-left')) {
                slideSwitch(target.closest('.big-slider__slide'));
            } else if (target.closest('.big-slider__image-right')) {
                slideSwitch(target.closest('.big-slider__slide'));
            } 
        });
    };
    mouseСlick();

    const mouseOver = () => {
        slider.addEventListener('mouseover', () => {
            clearInterval(interval);
        });
        
        slider.addEventListener('mouseout', () => {
            autoSwitch(5000);
        });
    };
    mouseOver();
}
bigSlider('.program-slider', '.big-slider__slide');
bigSlider('.travel-slider', '.big-slider__slide');


const reviewsSlider = () => {
    /* Индекс слайда по умолчанию */
    const rightArrow = document.querySelector('.reviews-slider__right-arrow');
    const leftArrow = document.querySelector('.reviews-slider__left-arrow');
    const dots = document.querySelectorAll('.reviews-slider__dot');
    let slideIndex = 1;
    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides(slideIndex += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
        showSlides(slideIndex -= 1);  
    }

    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /* Основная функция сладера */
    function showSlides(n) {
        const slides = document.querySelectorAll('.reviews-slider__slide');
        const dots = document.querySelectorAll('.reviews-slider__dot');
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" reviews-slider__active-dot", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " reviews-slider__active-dot";
    }
    rightArrow.addEventListener('click', () => {
        plusSlide();
    });
    leftArrow.addEventListener('click', () => {
        minusSlide();
    });

    dots.forEach((element, index) => {
        element.addEventListener('click', () => {
            currentSlide(index + 1);
        })
    });
};
reviewsSlider();