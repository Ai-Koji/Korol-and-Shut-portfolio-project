// scroll up
window.onscroll = function() {scrollFunction()};

let arrowUp = null

function scrollFunction() {
    arrowUp = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrowUp.classList.add("show");
        arrowUp.classList.remove("hidden-scroll-animation");
    } else {
        arrowUp.classList.add("hidden-scroll-animation");
        setTimeout(function() {
        arrowUp.classList.remove("show");
        arrowUp.classList.remove("hidden-scroll-animation")
        }, 1000);
    }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("scroll-to-top").addEventListener("click", scrollToTop);

// for mobile nav
let isOpen = false;

function OpenCloseNavbar () {
    let nav = document.querySelector(".mobile");
    if (isOpen)
        nav.style.display = 'none';
    else 
        nav.style.display = 'flex';
    isOpen = !isOpen;
}

// media
const mediaQuery = window.matchMedia('(min-width: 983px)')
function OpenCloseNavbarMedia(e) {
    let nav = document.querySelector(".mobile")
    if (e.matches) {
        nav.style.display = "none";
    }
    else {
    if (isOpen)
        nav.style.display = 'flex';
    else 
        nav.style.display = 'none';
    }
}
mediaQuery.addListener(OpenCloseNavbarMedia)
OpenCloseNavbarMedia(mediaQuery)