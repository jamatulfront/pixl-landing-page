const discoverLink = document.querySelector(".discover-link");
const goToTopBtn = document.getElementById("goto-top-btn");
const header = document.querySelector(".header");
const headerNavigation = document.querySelector(".header-navigation");
const clientsSection = document.querySelector(".section-clients");
const guidesSection = document.querySelector(".section-guides");
const discoverSection = document.querySelector(".section-discover");
const discoverInverseSection = document.querySelector(
  ".section-discover-inverse"
);
const clientGridItems = document.querySelectorAll(".clients-grid-item");

const btnCreate = document.getElementById("btn-create");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");

//Model open

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("m-hidden");
  overlay.classList.remove("m-hidden");
};

const closeModal = function () {
  modal.classList.add("m-hidden");
  overlay.classList.add("m-hidden");
};

btnCreate.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//for scrolling to discover section
discoverLink.addEventListener("click", (e) => {
  e.preventDefault();
  discoverSection.scrollIntoView({ behavior: "smooth" });
});
//for scrolling back to header section
goToTopBtn.addEventListener("click", (e) => {
  header.scrollIntoView({ behavior: "smooth" });
});

//Sticky Header
let headerCallback = function (entries) {
  let [entry] = entries;
  if (!entry.isIntersecting) headerNavigation.classList.add("sticky");
  else headerNavigation.classList.remove("sticky");
};
let headerOpt = {
  root: null,
  threshold: 0.1,
  rootMargin: `280px`,
};
let headerObserver = new IntersectionObserver(headerCallback, headerOpt);
headerObserver.observe(header);

//clients revealing animation
let clientObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (entry.isIntersecting) {
      clientGridItems.forEach((el, i) => {
        el.classList.remove(`c-h--${i + 1}`);
      });
      observer.unobserve(entry.target);
    }
  },
  { root: null, threshold: 0.3 }
);
console.log(clientsSection);
clientObserver.observe(clientsSection);

//revealing at scrolling
let sectionDiscoverObserver = new IntersectionObserver(
  (entries, observer) => {
    let entry = entries[0];
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 1,
    rootMargin: "400px",
  }
);
sectionDiscoverObserver.observe(discoverSection);
sectionDiscoverObserver.observe(discoverInverseSection);
sectionDiscoverObserver.observe(guidesSection);
