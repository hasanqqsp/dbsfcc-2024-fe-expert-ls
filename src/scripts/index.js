import "../styles/styles.css";

import App from "./views/app";
const showButton = document.querySelector(".navbar-toggler");
const sidebar = document.querySelector(".collapsible");
const closeButton = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");
const content = document.querySelector("main");

// TODO : Load App

document.addEventListener("DOMContentLoaded", () => {
    const skipLinkElem = document.querySelector(".skip-to-content");
    skipLinkElem.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#main").focus();
    });
});
