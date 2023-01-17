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

if (window.screen.width < 600) {
  window.location.replace("https://l-a-roleplay.github.io/invite.github.io/");
}
