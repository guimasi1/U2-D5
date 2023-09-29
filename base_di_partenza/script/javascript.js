const header = document.getElementsByClassName("divisor")[0];
const button = document.getElementsByTagName("li")[4];

window.addEventListener("scroll", function (e) {
  console.log(e);
  if (window.scrollY >= 250) {
    header.classList.add("scroll-animation");

    button.classList.add("white-color");
  } else {
    header.classList.remove("scroll-animation");
  }
});
