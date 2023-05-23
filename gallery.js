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
  if (currentIndex == -1) 
    currentIndex = 5;
  else if (currentIndex == 6) 
    currentIndex = 0;

  let translateX = -100 * currentIndex;
  
  videos.forEach(video => {
    video.style.transform = `translateX(${translateX}vw)`;
  });
}

prevBtn.addEventListener('click', () => moveVideos(-1));
nextBtn.addEventListener('click', () => moveVideos(1));


// gallery-image
function EnlargeImage(index) {
  document.querySelector("#enlarged-image").src = srcList[index];
  document.querySelector(".enlarged-image").classList.remove('hidden');
}

function ReduceImage() {
  document.querySelector(".enlarged-image").classList.add('hidden');
}


let galleryImages = document.querySelectorAll("#image");
let srcList = [];


galleryImages.forEach(galleryImage => {
  srcList.push(galleryImage.src);
});
document.querySelector("#close").addEventListener("click", ReduceImage);
