window.initView = function() {
    console.log("window.onload is running for Model");
    window.viewpoint = document.getElementById("viewpoint");
    window.isRotating = false;
    window.rotationAngle = 0;
    window.objectTransform = document.getElementById("objectTransform");
    window.isRotatingX = false;
    window.isRotatingY = false;
    window.isBouncing = false;
    window.rotationAngleX = 0;
    window.rotationAngleY = 0;
    window.bounceHeight = 0;
    window.rotationSpeed = Math.PI * 2 / (20 * 60);
  }
  