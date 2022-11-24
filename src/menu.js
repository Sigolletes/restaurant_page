// function creates menu content

// export function that calls previous function
function menu() {
  const main = document.querySelector("main");
	main.innerHTML = "";

	const menuTitle = document.createElement("div");
	const recipe1 = document.createElement("div");
	const recipe2 = document.createElement("div");
  const recipe3 = document.createElement("div");
  const recipe4 = document.createElement("div");

  main.appendChild(menuTitle);
	main.appendChild(recipe1);
	main.appendChild(recipe2);
  main.appendChild(recipe3);
  main.appendChild(recipe4);

	menuTitle.classList.add("section");
	recipe1.classList.add("section");
	recipe2.classList.add("section");
  recipe3.classList.add("section");
  recipe4.classList.add("section");

  menuTitle.innerHTML = "<h1>MENU</h1>";

  recipe1.innerHTML += "<h3>VEGAN BURGUER</h3>";
  recipe1.innerHTML += "<img src='https://realfood.tesco.com/media/images/1400x919-BBQ-jackfruit-22982f73-d9e0-4ff1-a990-581a5481028d-0-1400x919.jpg'></img>";

  recipe2.innerHTML += "<h3>MISO AUBERGINES</h3>";
  recipe2.innerHTML += "<img src='https://realfood.tesco.com/media/images/RFO-1400x919-MisoAubergine-ffc6baab-2e15-43ca-8302-3301e8ab48d3-0-1400x919.jpg'></img>";

  recipe3.innerHTML += "<h3>VEGAN MUSHROOM CARBONARA</h3>";
  recipe3.innerHTML += "<img src='https://realfood.tesco.com/media/images/RFO-1400x919-Mushroom-Carbonara-09a42f48-b468-40d8-8214-3622f0776b45-0-1400x919.jpg'></img>";

  recipe4.innerHTML += "<h3>SWEET POTATOS</h3>";
  recipe4.innerHTML += "<img src='https://realfood.tesco.com/media/images/1400x919-SweetPotatoSpinachCurry-353928fe-2d02-4119-b174-3aedef7ea8ca-0-1400x919.jpg'></img>";
  recipe4.innerHTML += "<p>Pictures by <a href='https://realfood.tesco.com/'>realfood.tesco.com</a></p>";
};

export default menu;