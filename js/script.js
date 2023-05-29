let selector = false;

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!selector) {
      selector = true;
      swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (selector) {
    swiper.destroy();
    selector = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);

const showMoreButton = document.getElementById("show-more");
const brandItems = document.querySelectorAll(".brands__item:nth-child(n+7)");
let toggle = false;

function push() {
  if (!toggle) {
    showMoreButton.classList.toggle("show-more--active");
    for (let i = 0; i < brandItems.length; i++) {
      brandItems[i].classList.remove("brands__item--close");
      brandItems[i].classList.toggle("brands__item--show");
    }
    showMoreButton.textContent = "Скрыть";
    toggle = true;
  } else if (toggle) {
    showMoreButton.classList.toggle("show-more--active");
    let delay = 300;
    for (let i = 0; i < brandItems.length; i++) {
      brandItems[i].classList.add("brands__item--close");
      setTimeout(function() {
        brandItems[i].classList.toggle("brands__item--show");
      }, delay);
      delay -= 20;
    }
    setTimeout(function() {showMoreButton.textContent = "Показать все"}, 290);
    toggle = false;
  } 
}