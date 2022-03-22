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

  if (document.documentElement.scrollTop > 1580 && document.documentElement.scrollTop < 2500) {
   document.body.style.background = "black";
   document.getElementById('rgster-reason').style.position = "fixed" ;
   document.getElementById('rgster-reason').style.display = "block" ;
  }
  else if (document.documentElement.scrollTop > 2500)
  {
   document.body.style.background = "white";
   document.getElementById('rgster-reason').style.position = "absolute" ;
   document.getElementById('rgster-reason').style.display = "none" ;
  }
  else
  {
   document.body.style.background = "white";
   document.getElementById('rgster-reason').style.position = "relative" ;
   document.getElementById('rgster-reason').style.display = "none" ;
  }
}