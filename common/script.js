window.onscroll = function() {loadStickynav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function loadStickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById('naavbar').style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    document.getElementById('naavbar').style.display = "none";
  }
}
