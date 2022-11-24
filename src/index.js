import home from './home';
import menu from './menu';
import contact from './contact';
import template from './template';

addEventListener("load", () => {
  template();
	navigation();
  home();
  homeTag.classList.add("active");
  menuTag.classList.remove("active");
  contactTag.classList.remove("active");
});

function navigation() {
	const homeTag = document.querySelector("#homeTag");
  const menuTag = document.querySelector("#menuTag");
  const contactTag = document.querySelector("#contactTag");

  homeTag.addEventListener("click", () => {
    home();
    homeTag.classList.add("active");
    menuTag.classList.remove("active");
    contactTag.classList.remove("active");
  });

  menuTag.addEventListener("click", () => {
    menu();
    homeTag.classList.remove("active");
    menuTag.classList.add("active");
    contactTag.classList.remove("active");
  });

  contactTag.addEventListener("click", () => {
    contact();
    homeTag.classList.remove("active");
    menuTag.classList.remove("active");
    contactTag.classList.add("active");
  });
}

