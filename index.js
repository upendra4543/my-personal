
///dropdown section
const hideBtn = document.querySelectorAll(".drop-down-container");
const hide = document.querySelectorAll(".drop-down");

function hidden(e) {
    e.stopPropagation(); // prevent bubbling so it doesn't close immediately
    const currentDisplay = window.getComputedStyle(hide[0]).display;
    hide[0].style.display = (currentDisplay === "none") ? "block" : "none";
  }

hideBtn[0].addEventListener("click", hidden);

 document.addEventListener("click", () => {
    hide[0].style.display = "none";
 })
 //////end

 const dynamicText = document.getElementById("dynamicText");

let current = " UPENDRA SHRIVASTAVA !";
let next = "  FULLSTACK DEVELOPER";
let isOriginal = true;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateNameChange() {
  while (true) {
    const currentWords = current.split(" ");
    const nextWords = next.split(" ");

    // Remove current words one by one
    for (let i = currentWords.length; i > 0; i--) {
      dynamicText.textContent = currentWords.slice(0, i ,-1).join(" ");
      await delay(300);
    }

    await delay(500); // short pause before adding new name

    // Add next words one by one
    for (let i = 0; i <= nextWords.length; i++) {
      dynamicText.textContent = nextWords.slice(0, i).join(" ");
      await delay(300);
    }

    // Swap names for next loop
    [current, next] = [next, current];
    await delay(2000); // pause before reversing again
  }
}

animateNameChange();
