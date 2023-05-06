
let slideIdOfMainCarousel = 1;
const maxIdOfMainCarousel = 5;

function showSlideMain() {

    // Находим активный слайд и скрываем его
    let activeSlide = document.querySelector('#MainSlide' + (slideIdOfMainCarousel)); 
    activeSlide.classList.remove('carousel-opened');
    activeSlide.classList.add('carousel-hidden');

    if (slideIdOfMainCarousel >= maxIdOfMainCarousel) {
        slideIdOfMainCarousel = 1;
    } else {
        slideIdOfMainCarousel++;
    }


    // Запускаем переход на следующий слайд через 3 секунды
    setTimeout(function() {
        activeSlide.classList.add('hidden');
        let newActiveSlide = document.querySelector('#MainSlide' + slideIdOfMainCarousel); 
        newActiveSlide.classList.remove('hidden');
        newActiveSlide.classList.remove('carousel-hidden');
        newActiveSlide.classList.add('carousel-opened');
    }, 3000);
}

let mainCarousel = document.querySelector('.main-carousel');

mainCarousel.addEventListener("click", () => {showSlideMain()});