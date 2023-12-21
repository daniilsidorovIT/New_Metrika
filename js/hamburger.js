const hamburgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".header__nav_mobile");
const headerInner = document.querySelector(".header__nav-inner");
const page = document.querySelector(".page");
const menuLinks = document.querySelectorAll("[data-close-link");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("hamburger_active");
  mobileNav.classList.toggle("is-active");
  headerInner.classList.toggle("is-active");
  page.classList.toggle("page_active");
});

document.querySelectorAll("[data-close-link]").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerBtn.classList.remove("hamburger_active");
    mobileNav.classList.remove("is-active");
    headerInner.classList.remove("is-active");
    page.classList.remove("page_active");
  })
);

mobileNav.addEventListener("click", (event) => {
  const isClickOutsideContent = !event.composedPath().includes(headerInner);

  if (isClickOutsideContent) {
    hamburgerBtn.classList.remove("hamburger_active");
    mobileNav.classList.remove("is-active");
    headerInner.classList.remove("is-active");
    page.classList.remove("page_active");
  }
});
