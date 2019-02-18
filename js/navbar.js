function responsiveNavbar() {
    console.log("[navbar.js] init")

    var x = document.getElementById("navbar");
    if (x.className === "nav-items topnav") {
        x.className += " responsive";
    } else {
        x.className = "nav-items topnav";
    }
};