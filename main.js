const navCloseEl = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const navIconEl = document.querySelector(".nav__icon");
const navBgOverlayEl = document.querySelector(".nav__bgOverlay");

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.visibility = "visible";
});

/*****  JS file for opening menu in case of mobile view ***********/
const navOpen = () => {
  navList.classList.add("show");
  navBgOverlayEl.classList.add("active");
  document.body.style =
    "visibility: visible; height: 100vh; width:100vw; overflow:hidden;";
};

/*************** NAV CLOSE ***********/
const navClose = () => {
  navList.classList.remove("show");
  navBgOverlayEl.classList.remove("active");
  document.body.style =
    "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
};
4; /***** Events for executing  functions * */
navIconEl.addEventListener("click", navOpen);

navCloseEl.addEventListener("click", navClose);

navBgOverlayEl.addEventListener("click", navClose);
