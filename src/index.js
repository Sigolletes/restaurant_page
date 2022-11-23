// imports
import home from './home';
import menu from './menu';
import contact from './contact';
import template from './template';

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