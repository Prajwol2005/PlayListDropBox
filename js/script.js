// Complete Day 1 goals here

//Old Day 1 code
/*
var songs = ["Over", "Le Parjure", "Lookin Up", "Cruel Dilemme", "Letting Go"];
var images = [
  "https://i1.sndcdn.com/artworks-000066084977-b06t2e-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000145746186-ylr3tx-t500x500.jpg",
  "https://images.genius.com/7f2fe4ef3fec3fce5485ca09872259d7.500x500x1.jpg",
  "https://i.scdn.co/image/ab67616d0000b27343fd757ae08d4dd4ce338b56",
  "https://images.genius.com/7f2fe4ef3fec3fce5485ca09872259d7.500x500x1.jpg",
];
var artists = ["Our Samplus", "Our Samplus", "Potsu", "Shiro Sagisu"];
var lengths = ["4:05mins", "3:26mins", "2:39mins", "2:46mins", "3:18mins"];
var links = [
  "https://youtu.be/Kbf9TzlRW0A",
  "https://youtu.be/a9qTQ0n1Hxk",
  "https://youtu.be/2Bo7cQb9FLs",
  "https://youtu.be/kvyVhbqFqDE",
  "https://youtu.be/o7zEwssiSVE",
];*/

//New Day 1 code
let mySongs = [
  {
    song: "Over",
    artist: "Our Samplus",
    runtime: "4:05mins",
    link: "https://youtu.be/Kbf9TzlRW0A",
    coverArt: "https://i1.sndcdn.com/artworks-000066084977-b06t2e-t500x500.jpg",
  },
  {
    song: "Le Parjure",
    artist: "Our Samplus",
    runtime: "3:26mins",
    link: "https://youtu.be/a9qTQ0n1Hxk",
    coverArt: "https://i1.sndcdn.com/artworks-000145746186-ylr3tx-t500x500.jpg",
  },
  {
    song: "Lookin Up",
    artist: "Potsu",
    runtime: "2:39mins",
    link: "https://youtu.be/2Bo7cQb9FLs",
    coverArt:
      "https://images.genius.com/7f2fe4ef3fec3fce5485ca09872259d7.500x500x1.jpg",
  },
  {
    song: "Cruel Dilemme",
    artist: "Shiro Sagisu",
    runtime: "2:46mins",
    link: "https://youtu.be/kvyVhbqFqDE",
    coverArt:
      "https://i.scdn.co/image/ab67616d0000b27343fd757ae08d4dd4ce338b56",
  },
  {
    song: "Letting Go",
    artist: "Potsu",
    runtime: "3:18mins",
    link: "https://youtu.be/o7zEwssiSVE",
    coverArt:
      "https://images.genius.com/7f2fe4ef3fec3fce5485ca09872259d7.500x500x1.jpg",
  },
];

function displaySongInfo() {
  
  mySongs.forEach(function (song) {
    $(".songs").append(`<p> ${song.song} </p>`);
  });
  
    mySongs.forEach(function (artist) {
    $(".artists").append(`<p> ${artist.artist} </p>`);
  });
  
    mySongs.forEach(function (runtime) {
    $(".lengths").append(`<p>${runtime.runtime}</p>`);
  });
  
    mySongs.forEach(function (link) {
    $(".links").append(`<a href=" ${link.link}" target="_blank">Test</a>`);
  });
  
    mySongs.forEach(function (coverArt) {
    $(".images").append(`<img src=${coverArt.coverArt}>`);
  });
  }

/*function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  songs.forEach(function (song) {
    $(".songs").append(`<li> ${song} </li>`);
  });

  images.forEach(function (image) {
    $(".images").append(`<img src=${image}>`);
  });

  artists.forEach(function (artist) {
    $(".artists").append(`<li> ${artist} </li>`);
  });

  lengths.forEach(function (length) {
    $(".lengths").append(`<li> ${length} </li>`);
  });

  links.forEach(function (link) {
    $(".links").append(`<a href=" ${link}" target="_blank">Test</a>`);
  });
}*/

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".song").empty();
  $(".coverArt").empty();
  $(".artist").empty();
  $(".runtime").empty();
  $(".link").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
