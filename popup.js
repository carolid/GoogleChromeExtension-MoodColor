function set_mood_color(mood_id, color) {
  if (mood_id == "happy_emoji") {
      chrome.storage.local.set({ happy_color: color }, function () {
          console.log("Mood color " + mood_id + " is set to " + color);
      });
  } else if (mood_id == "sad_emoji") {
      chrome.storage.local.set({ sad_color: color }, function () {
          console.log("Mood color " + mood_id + " is set to " + color);
      });
  } else if (mood_id == "tired_emoji") {
      chrome.storage.local.set({ tired_color: color }, function () {
          console.log("Mood color " + mood_id + " is set to " + color);
      });
  } else if (mood_id == "cute_emoji") {
      chrome.storage.local.set({ cute_color: color }, function () {
          console.log("Mood color " + mood_id + " is set to " + color);
      });
  } else if (mood_id == "content_emoji") {
      chrome.storage.local.set({ content_color: color }, function () {
          console.log("Mood color " + mood_id + " is set to " + color);
      });
  } else if (mood_id == "excited_emoji") {
      chrome.storage.local.set({ excited_color: color }, function () {
          console.log("Mood color " + mood_id + " is set to " + color);
      });
  }
}

var mood_color;
function get_mood_color(mood_id) {
  if (mood_id == "happy_emoji") {
      chrome.storage.local.get(["happy_color"], function (result) {
          console.log(
              "Retrieved mood_color for " +
                  mood_id +
                  " is " +
                  result.happy_color
          );
          mood_color = result.happy_color;
      });
  } else if (mood_id == "sad_emoji") {
      chrome.storage.local.get(["sad_color"], function (result) {
          console.log(
              "Retrieved mood_color for " +
                  mood_id +
                  " is " +
                  result.sad_color
          );
          mood_color = result.sad_color;
      });
  } else if (mood_id == "tired_emoji") {
      chrome.storage.local.get(["tired_color"], function (result) {
          console.log(
              "Retrieved mood_color for " +
                  mood_id +
                  " is " +
                  result.tired_color
          );
          mood_color = result.tired_color;
      });
  } else if (mood_id == "cute_emoji") {
      chrome.storage.local.get(["cute_color"], function (result) {
          console.log(
              "Retrieved mood_color for " +
                  mood_id +
                  " is " +
                  result.cute_color
          );
          mood_color = result.cute_color;
      });
  } else if (mood_id == "content_emoji") {
      chrome.storage.local.get(["content_color"], function (result) {
          console.log(
              "Retrieved mood_color for " +
                  mood_id +
                  " is " +
                  result.content_color
          );
          mood_color = result.content_color;
      });
  } else if (mood_id == "excited_emoji") {
      chrome.storage.local.get(["excited_color"], function (result) {
          console.log(
              "Retrieved mood_color for " +
                  mood_id +
                  " is " +
                  result.excited_color
          );
          mood_color = result.excited_color;
      });
  }
  return mood_color;
}

function set_mood_song(mood_id, song_url) {
  if (mood_id == "happy_emoji") {
      chrome.storage.local.set({ happy_song_url: song_url }, function () {
          console.log("Mood song_url " + mood_id + " is set to " + song_url);
      });
  } else if (mood_id == "sad_emoji") {
      chrome.storage.local.set({ sad_song_url: song_url }, function () {
          console.log("Mood song_url " + mood_id + " is set to " + song_url);
      });
  } else if (mood_id == "tired_emoji") {
      chrome.storage.local.set({ tired_song_url: song_url }, function () {
          console.log("Mood song_url " + mood_id + " is set to " + song_url);
      });
  } else if (mood_id == "cute_emoji") {
      chrome.storage.local.set({ cute_song_url: song_url }, function () {
          console.log("Mood song_url " + mood_id + " is set to " + song_url);
      });
  } else if (mood_id == "content_emoji") {
      chrome.storage.local.set({ content_song_url: song_url }, function () {
          console.log("Mood song_url " + mood_id + " is set to " + song_url);
      });
  } else if (mood_id == "excited_emoji") {
      chrome.storage.local.set({ excited_song_url: song_url }, function () {
          console.log("Mood song_url " + mood_id + " is set to " + song_url);
      });
  }
}

var song_url;
// returns a string representing color   ex. "blue"
// USAGE: get_mood_color("happy_emoji");
function get_mood_song(mood_id) {
  console.log("inside get_mood_song, mood_id: ", mood_id);

  if (mood_id == "happy_emoji") {
    chrome.storage.local.get(["happy_song_url"], function (result) {
          song_url = result.happy_song_url;
          console.log("retrieved", song_url, "for", mood_id);
      });
  } else if (mood_id == "sad_emoji") {
      chrome.storage.local.get(["sad_song_url"], function (result) {
          song_url = result.sad_song_url;
          console.log("retrieved", song_url, "for", mood_id);
      });
  } else if (mood_id == "tired_emoji") {
      chrome.storage.local.get(["tired_song_url"], function (result) {
          song_url = result.tired_song_url;
          console.log("retrieved", song_url, "for", mood_id);
      });
  } else if (mood_id == "cute_emoji") {
      chrome.storage.local.get(["cute_song_url"], function (result) {
          song_url = result.cute_song_url;
          console.log("retrieved", song_url, "for", mood_id);
      });
  } else if (mood_id == "content_emoji") {
      chrome.storage.local.get(["content_song_url"], function (result) {
          song_url = result.content_song_url;
          console.log("retrieved", song_url, "for", mood_id);
      });
  } else if (mood_id == "excited_emoji") {
      chrome.storage.local.get(["excited_song_url"], function (result) {
          song_url = result.excited_song_url;
          console.log("retrieved", song_url, "for", mood_id);
      });
  }

  return song_url;
}

// initialize preset colors and songs
set_mood_color("sad_emoji", "#C3DAFE");
set_mood_color("tired_emoji", "#E9D8FD");
set_mood_color("happy_emoji", "#DFF1D7");
set_mood_color("cute_emoji", "#FAD6D6");
set_mood_color("content_emoji", "#FEEBC8");
set_mood_color("excited_emoji", "#FFFFD1");
set_mood_color("sad_emoji", "#C3DAFE");
set_mood_color("tired_emoji", "#E9D8FD");
set_mood_color("happy_emoji", "#DFF1D7");
set_mood_color("cute_emoji", "#FAD6D6");
set_mood_color("content_emoji", "#FEEBC8");
set_mood_color("excited_emoji", "#FFFFD1");

// initialize default songs
set_mood_song("sad_emoji", "https://www.youtube.com/embed/pMzuzIjBXnQ");
set_mood_song("tired_emoji", "https://www.youtube.com/embed/7cqHtGb9WYM");
set_mood_song("happy_emoji", " https://www.youtube.com/embed/ZbZSe6N_BXs");
set_mood_song("cute_emoji", "https://www.youtube.com/embed/c62M8uUqyD0");
set_mood_song("content_emoji", "https://www.youtube.com/embed/UnyLfqpyi94");
set_mood_song("excited_emoji", "https://www.youtube.com/embed/4NRXx6U8ABQ");

// array of emoji HTML elements
let emojis = document.getElementsByClassName("emoji");

// function song_to_play () {
//     for (emoji of emojis) {
//         // add click listener to each emoji element
//         emoji.addEventListener("click", function () {
//             console.log("Clicked on: \n", this.id);
//             let song_to_play = get_mood_song(this.id);
//             song_to_play = get_mood_song(this.id);
//             window.open(song_to_play, "_blank").focus();
//             console.log("Retrieved song: ", song_to_play, "on click.");
// }
for (emoji of emojis) {
  // add click listener to each emoji element
  emoji.addEventListener("click", function () {
      console.log("Clicked on: \n", this.id);
      // unbold any active emojis
      active_emoji = document.querySelector("img.active.emoji");
      if (active_emoji != null) {
          active_emoji.classList.remove("active");
      }
      this.classList.add("active");

      // ** Change color -- ANAGHA**
      let color_default = get_mood_color(this.id);
      color_default = get_mood_color(this.id);
      document.body.style.backgroundColor = color_default;


      mood_id = this.id;            
      // get song_url using get_mood_song()
      let song_to_play = get_mood_song(mood_id);
      song_to_play = get_mood_song(mood_id);

      video = document.getElementById("video")
      video.src = song_to_play

 
      //  let happySong = document.getElementById("current_song");
      // function playHappySong() {
      //   // function that will play our "happySong"
      //     happySong.play();
      //   }
  });
}



// * CUSTOMIZE BUTTON FOR COLOR / SONG DROP DOWN)
button = document.getElementById("customize_button");
// add event listener on "click"
button.addEventListener("click", function () {
    console.log("Clicked on: \n", this.id);
    // get color option
    color_select = document.getElementById("color_select");
    let new_color = color_select.value;

    // find active emoji id
    active_emoji = document.querySelector("img.active.emoji");
    // set color
    set_mood_color(active_emoji.id, new_color);

    // update color;
    // let color_default = get_mood_color(active_emoji.id);
    // color_default = get_mood_color(active_emoji.id);
    document.body.style.backgroundColor = new_color;

  });
// function ()
// update_color    using set_mood_color()
// getting the color choice from dropdown
// updating color data within chrome storage
// change_color  see above
// update_song    using set_mood_song()
// getting the song choice from dropdown
// updating song data within chrome storage
// change_song see above
