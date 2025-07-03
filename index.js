

const hideBtn = document.querySelector(".drop-down-container");
const hide = document.querySelector(".drop-down");

function hidden(e) {
    e.stopPropagation(); // prevent bubbling so it doesn't close immediately
    const currentDisplay = window.getComputedStyle(hide).display;
    hide.style.display = (currentDisplay === "none") ? "block" : "none";
  }

hideBtn.addEventListener("click", hidden);

 document.addEventListener("click", () => {
    hide.style.display = "none";
 })