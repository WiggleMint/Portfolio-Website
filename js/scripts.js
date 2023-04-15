function openNav() {
    var x = document.getElementById("navbar");
    if (getComputedStyle(x, null).visibility === 'hidden') {
        x.style.visibility = "visible";
        x.style.opacity = "1";
    } else {
        x.style.visibility = "hidden";
        x.style.opacity = "0";
    }
}