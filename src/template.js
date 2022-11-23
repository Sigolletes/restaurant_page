// function creates template content
function displayTemplate() {
  const contentDiv = document.querySelector("#content");

	const header = document.createElement("header");
	const main = document.createElement("main");
	const footer = document.createElement("footer");

	const homeTag = document.createElement("div");
	const menuTag = document.createElement("div");
	const contactTag = document.createElement("div");

	homeTag.innerHTML = "<a href='./home.js'>HOME</a>";
	menuTag.innerHTML = "<a href='./menu.js'>MENU</a>";
	contactTag.innerHTML = "<a href='./contact.js'>CONTACT</a>";

	footer.innerText = "Coded by Sigolletes";

	contentDiv.appendChild(header);
	contentDiv.appendChild(main);
	contentDiv.appendChild(footer);

	header.appendChild(homeTag);
	header.appendChild(menuTag);
	header.appendChild(contactTag);
}

// export function that calls previous function
function template() {
  displayTemplate();
};

export default template;