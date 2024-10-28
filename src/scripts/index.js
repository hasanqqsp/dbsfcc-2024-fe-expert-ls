import 'regenerator-runtime';

import "../styles/style.css";

import App from './views/app';
import swRegister from './utils/swRegister';

const drawerButton = document.querySelector("#drawer-button");
const drawerNavigation = document.querySelector("#navList");
const mainElement = document.querySelector("main");
 
const app = new App({
  button: drawerButton,
  drawer: drawerNavigation,
  content: mainElement,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});