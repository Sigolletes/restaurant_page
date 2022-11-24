// function creates contact content
function displayContact() {
  const main = document.querySelector("main");
	main.innerHTML = "";

	const contactTitle = document.createElement("div");
	const contactInfo = document.createElement("div");
	const contactUbication = document.createElement("div");

	contactTitle.classList.add("section");
	contactInfo.classList.add("section");
	contactUbication.classList.add("section");

  contactTitle.innerHTML = "<h1>CONTACT US/h1>";

  contactInfo.innerHTML = "<h3>CONTACT</h3>";
  contactInfo.innerHTML = "<p>Phone: 555 123 123</p>";
  contactInfo.innerHTML = "<p>Email: ecorestaurant@eco.tree</p>";
};

// export function that calls previous function
function contact() {
  displayContact();
};

export default contact;