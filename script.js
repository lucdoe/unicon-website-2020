const acc = document.getElementsByClassName("accordion");
const i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}