// import "./styles/main.css";
import homePageLoader from "./app/homePage.js";
import aboutPageLoader from "./app/aboutPage.js";
import menuPageLoader from "./app/menuPage.js";
import contactPageLoader from "./app/contactPage.js";

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

document.addEventListener("DOMContentLoaded", () => {
  homePageLoader();
});

home.addEventListener("click", () => homePageLoader());
about.addEventListener("click", () => aboutPageLoader());
menu.addEventListener("click", () => menuPageLoader());
contact.addEventListener("click", () => contactPageLoader());
