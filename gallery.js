// const carousel = document.querySelector('iframe');
// const videos = document.querySelectorAll('.videos iframe');
// const prevBtn = document.querySelector('#prevVideo');
// const nextBtn = document.querySelector('#nextVideo');

// let carouselWidth = carousel.offsetWidth;
// let currentIndex = 0;

// prevBtn.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     carousel.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
//   }
// });

// nextBtn.addEventListener('click', () => {
//   if (currentIndex < videos.length - 1) {
//     currentIndex++;
//     console.log(carousel)
//     // for (let index; index == carousel.length; index++)
//     carousel.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
//   }
// });

const carousel = document.querySelector('.carousel');
const videos = carousel.querySelectorAll('iframe');
const prevBtn = document.querySelector('#prevVideo');
const nextBtn = document.querySelector('#nextVideo');

let currentIndex = 0;
const videoWidth = videos[0].clientWidth;
const videoMarginRight = parseInt(window.getComputedStyle(videos[0])['margin-right']);
const videoTotalWidth = videoWidth + videoMarginRight;

function moveVideos(direction) {
  currentIndex += direction;
  // let translateX = -((currentIndex * videoTotalWidth) - videoMarginRight);
  if (currentIndex == -1) 
    currentIndex = 5;
  else if (currentIndex == 6) 
    currentIndex = 0;

  let translateX = -100 * currentIndex;
  
  videos.forEach(video => {
    video.style.transform = `translateX(${translateX}vw)`;
  });
}

// Add click events to buttons
prevBtn.addEventListener('click', () => moveVideos(-1));
nextBtn.addEventListener('click', () => moveVideos(1));