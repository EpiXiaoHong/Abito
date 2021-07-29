var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar-panel");
const menCloseBtn = document.querySelector(".close-menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
menCloseBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
