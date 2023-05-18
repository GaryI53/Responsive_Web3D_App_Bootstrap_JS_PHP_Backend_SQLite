window.initController = function() {
    console.log("window.onload is running for controller");
    window.objectTransform = document.getElementById("objectTransform");
    window.viewpoint = document.getElementById("viewpoint"); 
  
    // Viewpoint event listeners
    document.getElementById("front").addEventListener("click", function() {
        if (window.currentModel === "spriteLink") {
          window.viewpoint.setAttribute("position", "-10 0 0");
          window.viewpoint.setAttribute("orientation", "0 1 0 -1.57079");
        } else {
          window.viewpoint.setAttribute("position", "0 0 -10");
          window.viewpoint.setAttribute("orientation", "0 1 0 3.14159");
        }
      });
      
      document.getElementById("back").addEventListener("click", function() {
        if (window.currentModel === "spriteLink") {
          window.viewpoint.setAttribute("position", "10 0 0");
          window.viewpoint.setAttribute("orientation", "0 1 0 1.57079");
        } else {
          window.viewpoint.setAttribute("position", "0 0 10");
          window.viewpoint.setAttribute("orientation", "0 0 1 0");
        }
      });
      
      document.getElementById("left").addEventListener("click", function() {
        if (window.currentModel === "spriteLink") {
          window.viewpoint.setAttribute("position", "0 0 10");
          window.viewpoint.setAttribute("orientation", "0 0 1 0");
        } else {
          window.viewpoint.setAttribute("position", "-10 0 0");
          window.viewpoint.setAttribute("orientation", "0 1 0 -1.57079");
        }
      });
      
      document.getElementById("right").addEventListener("click", function() {
        if (window.currentModel === "spriteLink") {
          window.viewpoint.setAttribute("position", "0 0 -10");
          window.viewpoint.setAttribute("orientation", "0 1 0 3.14159");
        } else {
          window.viewpoint.setAttribute("position", "10 0 0");
          window.viewpoint.setAttribute("orientation", "0 1 0 1.57079");
        }
      });
  
    document.getElementById("top").addEventListener("click", function() {
        window.viewpoint.setAttribute("position", "0 8 0");
        window.viewpoint.setAttribute("orientation", "1 0 0 -1.57079");
    });
    document.getElementById("bottom").addEventListener("click", function() {
        window.viewpoint.setAttribute("position", "0 -8 0");
        window.viewpoint.setAttribute("orientation", "1 0 0 1.57079");
    });

    // Add a "turn off rendering" button event listener
    document.getElementById("off").addEventListener("click", function() {
      var currentState = window.objectTransform.getAttribute("render");
  
      // If the current state is "true", set it to "false", and vice versa
      if (currentState === "true") {
          window.objectTransform.setAttribute("render", "false");
      } else {
          window.objectTransform.setAttribute("render", "true");
      }
  });
  
  
    //Animation Listener
  
    document.getElementById("orbit").addEventListener("click", function() {
        window.isRotating = true;
    });
  
    document.getElementById("stop").addEventListener("click", function() {
        window.isRotating = false;
        window.isBouncing = false;
        window.isRotatingY = false;
        window.isRotatingX = false;
       
    });
    document.getElementById("rotateObjectX").addEventListener("click", function() {
        console.log("Trying to rotate X");
        window.isRotatingX = !window.isRotatingX;  // Toggle rotation on X axis
    });
  
    document.getElementById("rotateObjectY").addEventListener("click", function() {
        console.log("Trying to rotate Y");
        window.isRotatingY = !window.isRotatingY;  // Toggle rotation on Y axis
    });
  
    document.getElementById("bounceObject").addEventListener("click", function() {
        console.log("Trying to rotate Bounce");
        window.isBouncing = !window.isBouncing;  // Toggle bounce
        window.bounceHeight = 0;
    });
  
    function animate() {
        if(window.isRotating) {
            window.rotationAngle += 0.004; // 45 degrees in radians
            window.viewpoint.setAttribute("orientation", `0 1 0 ${window.rotationAngle}`);
        }
        if(window.isBouncing) {
            window.bounceHeight += 0.01;
            let yPosition = Math.abs(Math.sin(window.bounceHeight) * 4);
            window.objectTransform.setAttribute("translation", `0 ${yPosition} 0`);
        }
        if(window.isRotatingX) {
            window.rotationAngleX += window.rotationSpeed;
            window.objectTransform.setAttribute("rotation", `1 0 0 ${window.rotationAngleX}`);
        }
        if(window.isRotatingY) {
            window.rotationAngleY += window.rotationSpeed;
            window.objectTransform.setAttribute("rotation", `0 1 0 ${window.rotationAngleY}`);
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
    newLight.setAttribute('location', '0 0 -10'); // Change the Z-coordinate to negative
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

  

     
