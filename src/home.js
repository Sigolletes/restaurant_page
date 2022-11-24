// function creates home content
function displayHome() {
	const main = document.querySelector("main");
	main.innerHTML = "";

	const titleDiv = document.createElement("div");
	const infoDiv = document.createElement("div");
	const scheduleDiv = document.createElement("div");

	titleDiv.classList.add("section");
	infoDiv.classList.add("section");
	scheduleDiv.classList.add("section");

	titleDiv.innerHTML = "<h1>ECO RESTAURANT</h1>";

	infoDiv.innerHTML = "<h3>INFORMATION</h3>";
	infoDiv.innerHTML += "<p>This restaurant was created in 2000 with the purpose of serving the best natural, ecological and delicious vegan recipes of the area.</p>";
	infoDiv.innerHTML += "<p>All ingredients have been cultivated, collected or produced for ecological farmers of the area and all have the green seal.</p>";

	scheduleDiv.innerHTML = "<h3>SCHEDULE</h3>";
	scheduleDiv.innerHTML += "<p>Monday: Closed</p>";
	scheduleDiv.innerHTML += "<p>Tuesday: 12:00 - 23:00</p>";
	scheduleDiv.innerHTML += "<p>Wednesday: 12:00 - 23:00</p>";
	scheduleDiv.innerHTML += "<p>Thursday: 12:00 - 23:00</p>";
	scheduleDiv.innerHTML += "<p>Friday: 12:00 - 00:00</p>";
	scheduleDiv.innerHTML += "<p>Saturday: 10:00 - 00:00</p>";
	scheduleDiv.innerHTML += "<p>Sunday: 10:00 - 00:00</p>";

	main.appendChild(titleDiv);
	main.appendChild(infoDiv);
	main.appendChild(scheduleDiv);
}

// export function that calls previous function
function home() {
	displayHome();
};

export default home;