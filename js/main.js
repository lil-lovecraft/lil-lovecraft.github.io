// swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },

        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
      },
    });

// Show Video
let playButton = document.querySelector(".play-anime");
let video = document.querySelector(".video-container");
let animetrailer = document.querySelector("#animetrailer");
let closebtn = document.querySelector(".close-video");

playButton.onclick = () => {
  video.classList.add("show-anime");
// Auto Play Click on Botton
  animetrailer.play();
};

closebtn.onclick = () => {
  video.classList.remove("show-anime");
// Pause video
  animetrailer.pause();
};

var controls =
[
    'play-large', // The large play button in the center
   // 'restart', // Restart playback
   // 'rewind', // Rewind by the seek time (default 10 seconds)
    'play', // Play/pause playback
    'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'duration', // The full duration of the media
    'mute', // Toggle mute
    'volume', // Volume control
    'captions', // Toggle captions
    'settings', // Settings menu
    'airplay', // Airplay (currently Safari only)
    'fullscreen' // Toggle fullscreen
];

const player = new Plyr('#animetrailer',{controls});

const subtitles = document.getElementById("subtitles");

var controls =
[
    'play-large', // The large play button in the center
   // 'restart', // Restart playback
   // 'rewind', // Rewind by the seek time (default 10 seconds)
    'play', // Play/pause playback
    'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'duration', // The full duration of the media
    'mute', // Toggle mute
    'volume', // Volume control
    'captions', // Toggle captions
    'settings', // Settings menu
    'airplay', // Airplay (currently Safari only)
    'fullscreen' // Toggle fullscreen
];

const play = new Plyr('#hero-trailer',{controls});


// login / User Soon