const discoverLink = document.querySelector(".discover-link");
const goToTopBtn = document.getElementById("goto-top-btn");
const header = document.querySelector(".header");
const discoverSection = document.querySelector(".section-discover");

discoverLink.addEventListener("click", (e) => {
  e.preventDefault();
  discoverSection.scrollIntoView({ behavior: "smooth" });
});
goToTopBtn.addEventListener("click", (e) => {
  header.scrollIntoView({ behavior: "smooth" });
});
