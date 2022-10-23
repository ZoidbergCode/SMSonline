//HEADER AND BURGER MENU SCRIPTS HERE
const headerInput = document.querySelector(".header__search");
const burgerInput = document.querySelector(".search-burger");
const burger = document.querySelector(".header__burger");
const burgerIMG = document.querySelector(".burger__img img");
const headerLinks = document.querySelector("#menu");
let isBurgerOpened = false;

const burgerCheck = () => {
  const windowInnerWidth = window.innerWidth;
  headerInput.style =
    windowInnerWidth < 1165 ? "display: none" : "display: flex";
  burgerInput.style =
    windowInnerWidth >= 1165 ? "display: none" : "display: flex";
  burger.style = windowInnerWidth >= 1165 ? "display: none" : "display: flex";
};

const useBurger = () => {
  if (isBurgerOpened) {
    isBurgerOpened = false;
    burgerInput.style = "display: flex; transform: translateX(-100vw)";
    headerLinks.style = "transform: translateX(-100vw)";
    burgerIMG.src = "./images/header/burger.svg";
  } else {
    isBurgerOpened = true;
    burgerInput.style = "display: flex; transform: translateX(0)";
    headerLinks.style = "transform: translateX(0)";
    burgerIMG.src = "./images/header/cross.svg";
  }
};
burgerCheck();
window.addEventListener("resize", () => {
  burgerCheck();
});
burger.addEventListener("click", () => {
  useBurger();
});

// Langs modal here

const langsModal = document.querySelector(".langs-modal");
const langsButton = document.querySelector("#langs");
const langsModalButton = document.querySelector("#langsModal img");
let isLangsOpened = false;

const checkLangsModal = () => {
  console.log("modal checked");
  if (isLangsOpened) {
    langsModal.style = "display: none";
    isLangsOpened = false;
  } else {
    langsModal.style = "display: flex";
    isLangsOpened = true;
  }
};

[langsButton, langsModalButton].forEach((e) => {
  e.addEventListener("click", checkLangsModal);
});
