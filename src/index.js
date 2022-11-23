// imports
import home from './home.js';
import menu from '.menu.js';
import contact from '.contact.js';
import template from '.template.js';

// event listener page loaded tab home
addEventListener("load", () => {
  template();
  home();
});

// event listener tab menu
addEventListener("click", () => {
  template();
  menu();
});

// event listener tab contact
addEventListener("click", () => {
  template();
  contact();
});