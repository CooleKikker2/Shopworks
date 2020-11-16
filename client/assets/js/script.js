var navShown = false

document.getElementById("navtoggle").onclick = function() {
    if (navShown == false) {
        navShown = true;
        document.getElementById("navigatie").style.display = "block";
    } else {
        navShown = false;
        document.getElementById("navigatie").style.display = "none";
    }
}