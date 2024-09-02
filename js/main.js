windows.addEventListener("scroll", function() {
    var header = document.getElementByClass(".navigation-container");
    var scrollPos = window.scrollY;

    // Change the value here to control when the background should start to become transparent
    if (scrollPos > 100) {
        header.style.backgroundColor = "rgba(250, 250, 250)"; // 50% transparency
    } else {
        header.style.backgroundColor = "rgba(250, 250, 250)"; // Fully opaque
    }
});