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

  if (document.documentElement.scrollTop > 105 && document.documentElement.scrollTop < 1950) {
   document.body.style.background = "black";
  }
  else if (document.documentElement.scrollTop > 1950)
  {
   document.body.style.background = "white";
  }
  else
  {
   document.body.style.background = "white";
  }
}
