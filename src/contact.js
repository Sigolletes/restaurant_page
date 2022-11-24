// function creates contact content
function displayContact() {
  const main = document.querySelector("main");
	main.innerHTML = "";

	const contactTitle = document.createElement("div");
	const contactInfo = document.createElement("div");
	const contactLocation = document.createElement("div");

  main.appendChild(contactTitle);
	main.appendChild(contactInfo);
	main.appendChild(contactLocation);

	contactTitle.classList.add("section");
	contactInfo.classList.add("section");
	contactLocation.classList.add("section");

  contactTitle.innerHTML = "<h1>CONTACT US</h1>";
  contactInfo.innerHTML += "<h3>CONTACT</h3>";
  contactInfo.innerHTML += "<p>Phone: 555 123 123</p>";
  contactInfo.innerHTML += "<p>Email: ecorestaurant@eco.tree</p>";

  contactLocation.innerHTML += "<h3>LOCATION</h3>";
  contactLocation.innerHTML += "<p>Maple Street 13, Riverside Mountain</p>";
};

// export function that calls previous function
function contact() {
  displayContact();
};

export default contact;