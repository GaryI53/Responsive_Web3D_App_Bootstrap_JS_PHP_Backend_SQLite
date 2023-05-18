
  console.log("window.onload is running for view");
  window.initView = function() {
    document.getElementById("cokeLink").addEventListener("click", function (event) {
      event.preventDefault();
      loadModel("assets/X3D/cokeCanredone.x3d");
    });

    document.getElementById("spriteLink").addEventListener("click", function (event) {
      event.preventDefault();
      loadModel("assets/X3D/SpriteBottleRedone.x3d");
    });

    document.getElementById("fridgeLink").addEventListener("click", function (event) {
      event.preventDefault();
      loadModel("assets/X3D/cokeFridgeblend3.x3d");
    });

    document.getElementById("drPepCup").addEventListener("click", function (event) {
      event.preventDefault();
      loadModel("assets/X3D/drpeppercup.x3d");
    });

    document.getElementById("cokeLinkWF").addEventListener("click", function (event) {
      event.preventDefault();
      loadModel("assets/X3D/cokeCanredoneWireframe.x3d");
    });

    document.getElementById("spriteLinkWF").addEventListener("click", function (event) {
      event.preventDefault();
      loadModel("assets/X3D/SpriteBottleRedoneWireframe.x3d");
    });

    document.getElementById("fridgeLinkWF").addEventListener("click", function (event) {
      event.preventDefault();
      loadModel("assets/X3D/cokeFridgeblend3Wireframe.x3d");
    });

    document.getElementById("drPepCupWF").addEventListener("click", function (event) {
      event.preventDefault();
      loadModel("assets/X3D/drpeppercupWireframe.x3d");
    });

    function loadModel(url) {
      var inlineModel = document.getElementById("modelInline");
      inlineModel.setAttribute("url", url);
      console.log("URL set to: ", url);
      console.log("Current inline model URL: ", inlineModel.getAttribute("url"));
    }
    
  
 


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
  