// it works!
// var click = 1;
// if (click) {
//   alert('welcome');
// }

function doOnce() {
  if (document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    alert("Welcome to Andrea's Website!");
    document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
}
// <button onclick="doOnce()">Only do something once</button>
// trying new cades and see if it works:


// it works
// var name = prompt("what s is yr name?"); alert("Welcome " + name + "to my Webpage" + "!");
document.addEventListener('DOMContentLoaded', start)
//
// this didn't work. yet.
function start () {
  doOnce()
  // page()
  a()
}
function button () {
  var button = document.getElementsByClassName("button")
console.log("a is" + a)
console.log(a)
for (var i = 0; i < a.length; i++) {
  // a[i].addEventListener('mouseenter', makeGreen)
  // a[i].addEventListener('click', makeYellow)
}
  // .addEventListener('mouseleave', makeWhite)
  // a.addEventListener('click', makeYellow)
}
// // function page () {
//   var page = document.getElementById("page")
//   page.addEventListener('mouseenter', makeGreen)
//   // page.addEventListener('mouseleave', makeWhite)
//   page.addEventListener('click', makeYellow)
// }
function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}

function makeYellow (evt) {
  evt.target.style.backgroundColor = 'yellow'
}
