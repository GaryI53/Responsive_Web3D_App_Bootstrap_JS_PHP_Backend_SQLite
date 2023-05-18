<?php

// Define your model data
$models = [
  [
    "title" => "Blender Coke Can X3D",
    "description" => "This description is made to be dynamic through the use of JQuery. This is the Coca Cola can which has been modelled in Blender. The image that been used, is the Lab 2 image which can be found at https://canvas.sussex.ac.uk/courses/23366/pages/laboratory-2-building-3d-content-for-your-3d-app-with-3ds-max?module_item_id=1199388"
  ],
  [
    "title" => "Blender Sprite Bottle X3D",
    "description" => "This description is made to be dynamic through the use of JQuery. This is the Sprite bottle which has been modelled in Blender. The texture used was sourced from a free attribution site: https://seeklogo.com/vector-logo/182735/sprite"
  ],
    [
    "title" => "Blender Coca Cola Fridge X3D",
    "description" => "This description is made to be dynamic through the use of JQuery. This is a Coca Cola fridge which has been modelled in Blender. I used the original Lab 2 coke can, made a slice of the vertices of one side and rotated to create a door. I then made the plug, handles, shelves and fridge interior using meshes and materials from Blender. Smaller coke cans were also placed inside. The only externally sourced texture was from Lab 2: This is the Coca Cola can which has been modelled in blender. The image that been used, is the Lab 2 image which can be found at https://canvas.sussex.ac.uk/courses/23366/pages/laboratory-2-building-3d-content-for-your-3d-app-with-3ds-max?module_item_id=1199388"
  ],
    [
    "title" => "Blender Dr Pepper cup X3D",
    "description" => "This description is made to be dynamic through the use of JQuery. This is the Dr Pepper cup which has been modelled in Blender. The image texture can be found from the free attibution site: www.freepnglogos.com/pics/dr-pepper-logo-png"
  ],
  
];

// Set the response header to indicate JSON content
header("Content-Type: application/json");

// Convert the data to JSON format
$json = json_encode($models);

// Send the JSON response
echo $json;
?>




