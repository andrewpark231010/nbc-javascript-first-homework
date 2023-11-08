const upButton = document.querySelector(".up-Button");

window.addEventListener("scroll", () => {
  console.log({ scrollY });
  if (window.scrollY >= 100) {
    upButton.classList.add("show");
  } else {
    upButton.classList.remove("show");
  }
});

upButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
