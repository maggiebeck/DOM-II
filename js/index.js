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




//* [ ] `wheel`

document.getElementById("explanantion").addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "39px";
}

//* [ ] `drag / drop`


//* [ ] `load`

function myFunction() {
  alert("Page is loaded");
}

//* [ ] `focus`


//* [ ] `resize`


//* [ ] `scroll`
function myFunction() {
  document.getElementById("demo").innerHTML = x += 1;
}
//* [ ] `select`

//* [ ] `dblclick`

document.getElementById("intro").addEventListener("dblclick", myFunction);

function myFunction() {
  document.getElementById("intro").innerHTML = "Fun Bus was double clicked!";
}




//* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
//* [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`