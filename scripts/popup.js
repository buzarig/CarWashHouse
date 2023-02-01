const popupTarget = document.querySelector(".header__number");
const popUpContainer = document.querySelector(".popup");
const popUpContent = document.querySelector(".popup__content");
const closePopUp = document.querySelector(".popup__close");
const headerButton = document.querySelector(".header__button");
const thiggerBtn = document.querySelectorAll(".modal");
const btnArr = [...thiggerBtn];
const popUpText1 = document.querySelector(".tap__on");
const popUpText2 = document.querySelector(".popup__or");
const popUpText3 = document.querySelector(".popup__form");
const popUpText4 = document.querySelector(".popup__phone");
const clientName = document.querySelector(".name__input");
const clientPhone = document.querySelector(".number__input");
const submitBtn = document.querySelector(".callback__button");
const headerPhone = document.querySelector(".header__phone");
const burgerMainn = document.querySelector(".burger__main");
const burgerMennu = document.querySelector(".burger-menu");
// const nnns = document.querySelector(".burger-menu_lines")


btnArr.forEach((e) => {
  e.addEventListener("click", function () {
    console.log("fuck");
    popUpContainer.classList.add("active");
    burgerMennu.classList.remove("burger-menu_active");
    burgerMainn.classList.remove("active");
    nnn.classList.remove("active")
    sss.classList.remove("burger-menu_active")
  });
});

closePopUp.addEventListener("click", function () {
  popUpContainer.classList.remove("active");
});

popUpContainer.addEventListener("click", function (e) {
  if (
    e.target !== popUpContent &&
    e.target !== popUpText1 &&
    e.target !== popUpText2 &&
    e.target !== popUpText3 &&
    e.target !== popUpText4 &&
    e.target !== clientName &&
    e.target !== clientPhone &&
    e.target !== submitBtn
  ) {
    popUpContainer.classList.remove("active");
  }
});
