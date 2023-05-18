document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("cokeLink").addEventListener("click", function () {
        loadModel("assets/X3D/cokeCanredone.x3d");
      });

      document.getElementById("spriteLink").addEventListener("click", function () {
        loadModel("assets/X3D/SpriteBottleRedone.x3d");
      });

      document.getElementById("fridgeLink").addEventListener("click", function () {
        loadModel("assets/X3D/cokeFridgeblend3.x3d");
  });
document.getElementById("drPepCup").addEventListener("click", function () {
        loadModel("assets/X3D/drpeppercup.x3d");
      });
    
      document.getElementById("cokeLinkWF").addEventListener("click", function () {
        loadModel("assets/X3D/cokeCanredoneWireframe.x3d");
      });

      document.getElementById("spriteLinkWF").addEventListener("click", function () {
        loadModel("assets/X3D/SpriteBottleRedoneWireframe.x3d");
      });

      document.getElementById("fridgeLinkWF").addEventListener("click", function () {
        loadModel("assets/X3D/cokeFridgeblend3Wireframe.x3d");
      });

      document.getElementById("drPepCupWF").addEventListener("click", function () {
        loadModel("assets/X3D/drpeppercupWireframe.x3d");
      });

    });

    function loadModel(url) {
      document.getElementById("modelInline").setAttribute("url", url);
    }




let viewpoint;
let isRotating = false;
let rotationAngle = 0;
let objectTransform;
let isRotatingX = false;
let isRotatingY = false;
let isBouncing = false;
let rotationAngleX = 0;
let rotationAngleY = 0;
let bounceHeight = 0;
let rotationSpeed = Math.PI * 2 / (20 * 60);




window.onload = function() {
  objectTransform = document.getElementById("objectTransform");
    viewpoint = document.getElementById("viewpoint"); 

    document.getElementById("front").addEventListener("click", function() {
        viewpoint.setAttribute("position", "0 0 -10");
        viewpoint.setAttribute("orientation", "0 1 0 3.14159");
    });

    document.getElementById("back").addEventListener("click", function() {
        viewpoint.setAttribute("position", "0 0 10");
        viewpoint.setAttribute("orientation", "0 0 1 0");
    });

    document.getElementById("left").addEventListener("click", function() {
        viewpoint.setAttribute("position", "-10 0 0");
        viewpoint.setAttribute("orientation", "0 1 0 -1.57079");
    });

    document.getElementById("right").addEventListener("click", function() {
        viewpoint.setAttribute("position", "10 0 0");
        viewpoint.setAttribute("orientation", "0 1 0 1.57079");
    });

    document.getElementById("top").addEventListener("click", function() {
        viewpoint.setAttribute("position", "0 8 0");
        viewpoint.setAttribute("orientation", "1 0 0 -1.57079");
    });


    //Animation Listener

    document.getElementById("orbit").addEventListener("click", function() {
        isRotating = true;
    });

    document.getElementById("stop").addEventListener("click", function() {
        isRotating = false;
        isBouncing = false;
        isRotatingY = false;
        isRotatingX = false;
       
    });
    document.getElementById("rotateObjectX").addEventListener("click", function() {
        isRotatingX = !isRotatingX;  // Toggle rotation on X axis
    });

    document.getElementById("rotateObjectY").addEventListener("click", function() {
        isRotatingY = !isRotatingY;  // Toggle rotation on Y axis
    });

    document.getElementById("bounceObject").addEventListener("click", function() {
        isBouncing = !isBouncing;  // Toggle bounce
        bounceHeight = 0;
    });

    function animate() {
        if(isRotating) {
            rotationAngle += 0.004; // 45 degrees in radians
            viewpoint.setAttribute("orientation", `0 1 0 ${rotationAngle}`);
        }
        if(isBouncing) {
            bounceHeight += 0.01;
            let yPosition = Math.abs(Math.sin(bounceHeight) * 4);
            objectTransform.setAttribute("translation", `0 ${yPosition} 0`);
        }
        if(isRotatingX) {
            rotationAngleX += rotationSpeed;
            objectTransform.setAttribute("rotation", `1 0 0 ${rotationAngleX}`);
        }
        if(isRotatingY) {
            rotationAngleY += rotationSpeed;
            objectTransform.setAttribute("rotation", `0 1 0 ${rotationAngleY}`);
        }
        requestAnimationFrame(animate);
    }

    // Start the animation loop
    animate();



//Animation Listener

document.getElementById("Headlight").addEventListener("click", function() {
    // Create a new pointLight element, headlight is increased by adding more lights
    let newLight = document.createElement('pointLight');

    newLight.setAttribute('intensity', '1');
    newLight.setAttribute('location', '0 0 10'); 
    newLight.setAttribute('radius', '100'); 

    // Append the new light to the scene
    let scene = document.getElementById('x3d-container').firstElementChild.firstElementChild;
    scene.appendChild(newLight);
});

document.getElementById("turnOffHeadlight").addEventListener("click", function() {
    // Access the scene
    let scene = document.getElementById('x3d-container').firstElementChild.firstElementChild;

    // Get all pointLights in the scene
    let lights = scene.getElementsByTagName('pointLight');

    // If there's more than one light (i.e., the lights we've added),
    // remove the last one
    if (lights.length > 1) {
        scene.removeChild(lights[lights.length - 1]);
    }
});


}
});