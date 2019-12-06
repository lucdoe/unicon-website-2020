function toggleNavbar() {
  const navigationBar = document.getElementById("myTopnav");
  if (navigationBar.className === "topnav") {
    navigationBar.className += " responsive";
  } else {
    navigationBar.className = "topnav";
  }
} 

const getAccordion = document.getElementsByClassName("accordion");
const i;

for (i = 0; i < getAccordion.length; i++) {
  getAccordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}