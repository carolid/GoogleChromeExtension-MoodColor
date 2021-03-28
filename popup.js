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
set_mood_color("sad_emoji", "blue");
set_mood_color("tired_emoji", "gray");
set_mood_color("happy_emoji", "green");
set_mood_color("cute_emoji", "pink");
set_mood_color("content_emoji", "yellow");
set_mood_color("excited_emoji", "purple");

// initialize default songs
set_mood_song("sad_emoji", "https://www.youtube.com/watch?v=zwJQE0HkYZw");
set_mood_song("tired_emoji", "https://www.youtube.com/watch?v=zwJQE0HkYZw");
set_mood_song("happy_emoji", "https://www.youtube.com/watch?v=ZbZSe6N_BXs");
set_mood_song("cute_emoji", "https://www.youtube.com/watch?v=zwJQE0HkYZw");
set_mood_song("content_emoji", "https://www.youtube.com/watch?v=zwJQE0HkYZw");
set_mood_song("excited_emoji", "https://www.youtube.com/watch?v=zwJQE0HkYZw");

// array of emoji HTML elements
let emojis = document.getElementsByClassName("emoji");

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

        // *** Play song **

        // let song_to_play = get_mood_song(this.id);
        // song_to_play = get_mood_song(this.id);

        // window.open(song_to_play);
        // console.log("Retrieved song: ", song_to_play, "on click.");

        // key = this.id;                        returns something like "happy_emoji"
        // get song_url using get_mood_song()
        // iframe_element = document.getElementById("iframe_id")
        // iframe_element.src = song_to_play

        // let mood_id = this.id;
        // let song_to_play = get_mood_song(this.id);
        // window.open(result.song_to_play);

        //  let happySong = document.getElementById("current_song");
        // function playHappySong() {
        //   // function that will play our "happySong"
        //     happySong.play();
        //   }
    });
}

// * CUSTOMIZE BUTTON FOR COLOR / SONG DROP DOWN)
// button = getElementByID("Customize_Button");
// add event listener on "click"
// function ()
// update_color    using set_mood_color()
// getting the color choice from dropdown
// updating color data within chrome storage
// change_color  see above
// update_song    using set_mood_song()
// getting the song choice from dropdown
// updating song data within chrome storage
// change_song see above
