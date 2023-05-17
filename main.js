
// main-carousel
let slideIdOfMainCarousel = 1;
const maxIdOfMainCarousel = 5;

let mainCarousel = document.querySelector('.main-carousel');

function showSlideMain() {
    document.removeEventListener('click', showSlideMain);
    // Находим активный слайд и скрываем его
    console.log('dsadas')
    mainCarousel.removeEventListener("click", showSlideMain);
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
    }, 3000);
    
    setTimeout(function() {
      let newActiveSlide = document.querySelector('#MainSlide' + slideIdOfMainCarousel); 
      newActiveSlide.classList.remove('hidden');
      newActiveSlide.classList.remove('carousel-hidden');
      newActiveSlide.classList.add('carousel-opened');
      mainCarousel.addEventListener("click", showSlideMain);
  }, 3100);
}

mainCarousel.addEventListener("click", showSlideMain);

// плеер
const player = document.querySelector("#player audio");
const title = document.querySelector("#player h1");
const image = document.querySelector("#player img");
const musicText = document.querySelector(".music-text p");

const songs = [
  {
    title: "лесник",
    image: "images/albums/korol-i-shut.jpg",
    audio: "audio/lesnik.mp3",
    text: "Текст песни 2",
  },  
  {
    title: "Прыгну со скалы",
    image: "images/albums/acoustic.jpg",
    audio: "audio/scala.mp3",
    text: "Текст песни 2",
  },
  {
    title: "Джокер",
    image: "images/albums/prodavets-koshmarov.jpg",
    audio: "audio/djoker.mp3",
    text: "Текст песни 3",
  },
  {
    title: "Кукла колдуна",
    image: "images/albums/acoustic.jpg",
    audio: "audio/cucla.mp3",
    text: "Текст песни 2",
  },
  {
    title: "Валет и дама",
    image: "images/albums/korol-i-shut.jpg",
    audio: "audio/valet-i-dama.mp3",
    text: "Текст песни 3",
  }
];

let currentSong = 0;

function loadSong() {
  title.innerText = songs[currentSong].title;
  image.src = songs[currentSong].image;
  player.src = songs[currentSong].audio;
  musicText.innerText = songs[currentSong].text;
}

function playSong() {
  player.play();
  document.querySelector("#play").innerHTML = "⏸";
}

function pauseSong() {
  player.pause();
  document.querySelector("#play").innerHTML = "▶️";
}

function prevSong() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }
  loadSong();
  playSong();
}

function nextSong() {
  currentSong++;
  if (currentSong > songs.length - 1) {
    currentSong = 0;
  }
  loadSong();
  playSong();
}

loadSong();

document.querySelector("#prev").addEventListener("click", prevSong);
document.querySelector("#next").addEventListener("click", nextSong);

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    prevSong();
  } else if (e.code === "ArrowRight") {
    nextSong();
  }
});

// карусель альбомов

let discIndex = 1;

function prevDisc(){
  let elements = document.getElementsByClassName("three-albums");

  if (discIndex == 1){
    discIndex = 8;
  }
  // Пройти циклом по всем элементам и изменить их стиль  
  discIndex--;
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.transform = `translateX(-${100 * (discIndex - 1)}vw)`;
  }
}

function nextDisc(){
  let elements = document.getElementsByClassName("three-albums");

  
  if (discIndex == 7){
    discIndex = 0;
  }

  // Пройти циклом по всем элементам и изменить их стиль
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.transform = `translateX(-${100 * discIndex}vw)`;
  }
  discIndex++;
}