import home from './home';
import menu from './menu';
import contact from './contact';
import template from './template';

function navigation() {
	const homeTag = document.querySelector("#homeTag");
  const menuTag = document.querySelector("#menuTag");
  const contactTag = document.querySelector("#contactTag");

  homeTag.addEventListener("click", home);
  menuTag.addEventListener("click", menu);
  contactTag.addEventListener("click", contact);
}

addEventListener("load", () => {
  template();
	navigation();
  home();
});
