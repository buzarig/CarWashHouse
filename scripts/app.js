window.addEventListener("DOMContentLoaded", function () {
  footerVideo.addEventListener("click", function () {
    if (footerVideo.classList.contains("ready")) {
      return;
    } else {
      playIcon.classList.add("active");
      footerVideo.classList.add("ready");
      footerVideo.insertAdjacentHTML(
        "afterbegin",
        ' <iframe class="footer__player" src="https://www.youtube.com/embed/f1Z3GQxU9BI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      );
    }
  });
});

priceTitleArray.forEach((title, index) => {
  tableArray.forEach((table, tableIndex) => {
    title.addEventListener("click", () => {
      if (tableIndex === index) {
        tableArray[tableIndex].classList.toggle("closed-table");
        triangleArray[tableIndex].classList.toggle("closed-triangle");
      }
    });
  });
});
