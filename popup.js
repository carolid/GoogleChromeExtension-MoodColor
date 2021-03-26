// // Initialize butotn with users's prefered color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// // The body of this function will be execuetd as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

console.log("dsfsdaadasd");

let emojis = document.getElementsByClassName("emoji");

for (emoji of emojis) {
  emoji.addEventListener("click", function() {
    // unbold any active emojis
    active_emoji = document.querySelector("img.active.emoji");
    if (active_emoji != null) {
      active_emoji.classList.remove("active");
    }

    console.log("clicked on emoji", this.id);
    // turn clicked emoji bold
    this.classList.add("active");
})
}


