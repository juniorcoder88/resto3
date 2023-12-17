let element = document.querySelector(".axx");

element.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (window.scrollY >= 80) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
};
