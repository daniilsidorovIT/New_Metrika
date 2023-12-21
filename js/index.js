const buttons = document.querySelectorAll("[data-carousel-button]");
const openPopupButtons = document.querySelectorAll("[data-popup-target]");
const closePopupButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const BODY_FIXED = document.querySelector(".page");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

openPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.popupTarget);
    openPopup(popup);
  });
});

closePopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
  BODY_FIXED.classList.add("page_active");
}

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
  BODY_FIXED.classList.remove("page_active");
}

overlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".popup.active");
  popups.forEach((popup) => {
    closePopup(popup);
  });
});
