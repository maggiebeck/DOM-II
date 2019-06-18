// Your code goes here
//`mouseover`

document.getElementById("intro").onmouseover = function() {mouseOver()};
document.getElementById("intro").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("intro").style.color = "lightblue";
}

function mouseOut() {
    document.getElementById("intro").style.color = "black";
}

//* [ ] `keydown`
document.addEventListener("keydown", event => {
  alert("error cannot enter text.")})


//* [ ] `wheel`

document.getElementById("explanantion").addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "39px";
}

//* [ ] `drag / drop`
function dragStart(event) {
  event.dataTransfer.setData("document", event.target.id);
}

function dragging(event) {
  document.getElementById("img").innerHTML = "The image cannot be copied";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("document");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("img").innerHTML = "Images are copyrighted";
}


//* [ ] `load`

document.addEventListener("load", event => {
  alert("page is loaded.")})


//* [ ] `focus`

img-content.addEventListener("focus", event => {
  alert(:"focused image is copyrighted")})

//* [ ] `resize`
window.addEventListener('resize', (event) => alert('Page resized.'));


//* [ ] `scroll`
function myFunction() {
  document.getElementById("document").innerHTML = x += 1;
}
//* [ ] `select`
nav.addEventListener('select', (event) => {
  nav.classList.toggle("makeRed");
});

//* [ ] `dblclick`

document.getElementById("intro").addEventListener("dblclick", myFunction);

function myFunction() {
  document.getElementById("intro").innerHTML = "Fun Bus was double clicked!";
}




//* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
//* [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`
nav.forEach((ele) => ele.addEventListener('click', (ev) => {ev.preventDefault()}));