function responsiveNavbar() {
    console.log("[navbar.js] init")

    var x = document.getElementById("navbar");
    if (x.className === "nav-items topnav") {
        x.className += " responsive";
    } else {
        x.className = "nav-items topnav";
    }
};

// When the user scrolls down x from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}