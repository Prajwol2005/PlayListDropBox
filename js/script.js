// Complete Day 1 goals here

var songs = [
  "Over",
  "Le Parjure",
  "Lookin Up",
  "Cruel Dilemme",
];
var images = [
  "https://i1.sndcdn.com/artworks-000066084977-b06t2e-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000145746186-ylr3tx-t500x500.jpg",
  "https://images.genius.com/7f2fe4ef3fec3fce5485ca09872259d7.500x500x1.jpg",
  "https://i.scdn.co/image/ab67616d0000b27343fd757ae08d4dd4ce338b56",
];
var artists = ["Our Samplus", "Our Samplus", "Potsu", "Shiro Sagisu"];
var lengths = ["4:05min", "3:26min", "2:39min", "2:46min"];
var links = [
  "https://www.youtube.com/watch?v=6YNZlXfW6Ho",
  "https://youtu.be/a9qTQ0n1Hxk",
  "https://youtu.be/2Bo7cQb9FLs",
  "https://youtu.be/kvyVhbqFqDE",
];

function displaySongInfo() {
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
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
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
