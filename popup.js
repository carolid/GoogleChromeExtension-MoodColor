// // Initialize button with users's prefered color
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
//   chrome.storage.sync.set("happy_color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
class Emoji {
  constructor(emoji_id, color, song) {
    this.emoji_element = document.getElementById(emoji_id);
    this.color = color;
    this.song = song;
  }
}
//   Happy_Emoji_object
      // html element
      // color
      // song

// chrome.storage
    // happy_color :  "red"
    // happy_song : "youtube.osdjiosd"


// object containing emoji objects
let EmojiObjects = {};

// array of emoji HTML elements
let emojis = document.getElementsByClassName("emoji");

for (emoji of emojis) {
  // create a js object for each emoji element
  EmojiObjects[emoji.id] = new Emoji(emoji.id, "blue", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");

  // add click listener to each emoji element
  emoji.addEventListener("click", function() {
    console.log("Clicked on: \n", this.id);
    // unbold any active emojis
    active_emoji = document.querySelector("img.active.emoji");
    if (active_emoji != null) {
      active_emoji.classList.remove("active");
    }
    // turn clicked emoji bold
    this.classList.add("active");

    // ******** Change color ************

    // *********** Change song **************
      // key = this.id;                        returns something like "happy_emoji"
      // emoji_object = EmojiObjects[key];      Object contains, song and color
      // song_to_play = emoji_object.song       some "youtube.com/ "
      // iframe_element = document.getElementById("iframe_id")
      // iframe_element.src = song_to_play

      //  let happySong = document.getElementById("current_song"); 
      // function playHappySong() {
      //   // function that will play our "happySong"
      //     happySong.play(); 
      //   }
})
}



console.log(EmojiObjects);

