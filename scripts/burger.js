const menuBtn = document.querySelector(".burger-menu_button");
// const linesArr = [...menuBtn]
const popUp = document.querySelector(".pop-up__container");
const popUpLink = document.querySelectorAll(".pop-up__link");
const popUpArr = [...popUpLink];
console.log(menuBtn);
const burgerMain = document.querySelector(".burger__main");

const sss = document.querySelector(".burger-menu_button")
const nnn = document.querySelector(".burger-menu_lines")

sss.addEventListener("click", function (e) {
  e.preventDefault();
  sss.classList.toggle("burger-menu_active")
  burgerMain.classList.toggle("active")
  nnn.classList.toggle("active")

})


