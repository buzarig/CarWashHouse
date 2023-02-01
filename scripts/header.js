const navButtons = document.querySelectorAll(".header__nav-item");
const navButtonsArr = [...navButtons];
const headerMenu = document.querySelector(".menu");
const triangleHeader = document.querySelector(".triangle__header");



navButtonsArr.forEach((e, index) => {
  if (index === 3) {
    e.addEventListener("mouseover", function () {
      headerMenu.classList.add("opened");
    });
  }
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == headerMenu || headerMenu.contains(target);
  const its_btnMenu = target == headerMenu;
  const menu_is_active = headerMenu.classList.contains("opened");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    headerMenu.classList.toggle("opened");
  }
});
