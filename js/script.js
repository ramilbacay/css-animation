var glow = document.getElementById("glow");
var twitter = document.getElementById("twitter");
var fb = document.getElementById("fb");
var yt = document.getElementById("yt");
var assemble = document.getElementById("assemble");
var ironman = document.getElementById("ironman");
var avengers = document.getElementById("avengers");
var a = document.getElementById("a");
var btn = document.getElementById("btn");

//FIRST METHOD
btn.addEventListener("click", function() {
    glow.classList.remove("glow");
    twitter.classList.remove("twitter");
    fb.classList.remove("fb");
    yt.classList.remove("yt");
    assemble.classList.remove("assemble");
    ironman.classList.remove("ironman");
    avengers.classList.remove("avengers");
    a.classList.remove("a");
  setTimeout(function() {
    glow.classList.add("glow");
    twitter.classList.add("twitter");
    fb.classList.add("fb");
    yt.classList.add("yt");
    assemble.classList.add("assemble");
    ironman.classList.add("ironman");
    avengers.classList.add("avengers");
    a.classList.add("a");
  }, 0);
})

//SECOND METHOD
// btn.addEventListener("click", function() {
//    title.classList.add("animation");
// });
// title.addEventListener("animationend", function() {
//   title.classList.remove("animation");
// })
