const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
//review section
const track = document.querySelector(".carousel-track");
const leftButton = document.querySelector(".carousel-control.left");
const rightButton = document.querySelector(".carousel-control.right");

let scrollAmount = 0;

leftButton.addEventListener("click", () => {
  scrollAmount -= 300;
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
});

rightButton.addEventListener("click", () => {
  const maxScroll = track.scrollWidth - track.clientWidth;
  scrollAmount += 300;
  if (scrollAmount > maxScroll) {
    scrollAmount = maxScroll;
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
});
