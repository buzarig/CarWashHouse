const footerVideo = document.querySelector(".footer__video");
const playIcon = document.querySelector(".footer__play-icon");

const priceTitle = document.querySelectorAll(".price__title");
const table = document.querySelectorAll(".price__table");
const triangle = document.querySelectorAll(".triangle");

const priceTitleArray = [...priceTitle];
const tableArray = [...table];
const triangleArray = [...triangle];

tableArray.forEach((table) => {
  table.classList.add("closed-table");
});
