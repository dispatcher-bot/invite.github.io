var nav = document.getElementById("navlinks");
var navlinks = nav.getElementsByClassName("navlink");

function setActiveLink() {
  for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}

setActiveLink();

document.addEventListener("DOMContentLoaded", function(event) {
  animation_text_1("#text-anim");
});

function animation_text_1 (element){
  var newText = "";
  var theText = document.querySelector(element);
  for (i = 0; i < theText.innerText.length; i++) {
    newText += "<div>";
    if (theText.innerText[i] == " "){newText += "&nbsp;"}
    else {newText += theText.innerText[i];}
    newText += "</div>";
  }
  theText.innerHTML = newText;
  var targetsDiv = document.querySelectorAll(element+" div");
  TweenMax.staggerFromTo(targetsDiv, 2, {opacity:0, y:90, ease: Elastic.easeOut.config(1.2, 0.5)}, {opacity:1, y:0, ease: Elastic.easeOut.config(1.2, 0.5)}, 0.03);
}
