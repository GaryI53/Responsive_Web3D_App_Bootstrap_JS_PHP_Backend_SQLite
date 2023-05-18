function resize() {
    var x3dElement = document.getElementById("x3dElement");
    x3dElement.setAttribute("width", window.innerWidth + "px");
    x3dElement.setAttribute("height", window.innerHeight + "px");
}

window.addEventListener("resize", resize);
window.addEventListener("load", resize);