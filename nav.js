function toggleNavbar() {
	const navigationBar = document.getElementById("myTopnav");
	if (navigationBar.className === "topnav") {
		navigationBar.className += " responsive";
	} else {
		navigationBar.className = "topnav";
	}
}
