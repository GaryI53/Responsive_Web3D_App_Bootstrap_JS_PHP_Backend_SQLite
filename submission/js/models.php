<?php

$data = array(
    'cokeLink' => array(
        'description' => 'This description is made to be dynamic through the use of JQuery, AJAX and JSON. This is the Coca Cola can which has been modelled in Blender. All models use inline X3D to istantiate a single model. The image that been used, is the Lab 2 image which can be found at https://canvas.sussex.ac.uk/courses/23366/pages/laboratory-2-building-3d-content-for-your-3d-app-with-3ds-max?module_item_id=1199388',
        'title' => 'Blender Coke Can X3D',
        'titleLower' => 'History of Coca Cola',
        'descriptionLower' => 'It was 1886, and in New York Harbour, workers were constructing the Statue of Liberty. Eight hundred miles away, another great American symbol was about to be unveiled. Like many people who change history, John Pemberton, an Atlanta pharmacist, was inspired by simple curiosity. One afternoon, he stirred up a fragrant, caramel-coloured liquid and, when it was done, he carried it a few doors down to Jacobs Pharmacy. Here, the mixture was combined with carbonated water and sampled by customers who all agreed - this new drink was something special. So Jacobs Pharmacy put it on sale for five cents (about 3p) a glass.',
    ),
    'spriteLink' => array(
        'description' => 'Thisrrr description is made to be dynamic through the use of JQuery, AJAX and JSON. This is the Sprite bottle which has been modelled in Blender. All models use inline X3D to istantiate a single model. The texture used was sourced from a free attribution site: https://seeklogo.com/vector-logo/182735/sprite',
        'title' => 'Blender Sprite Bottle X3D',
        'titleLower' => 'Sprite — Fanta Klare Zitrone',
        'descriptionLower' => 'Crisp, refreshing, clean-tasting Sprite is now the worlds leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite Zero, part of Coca Colas no sugar Zero range, offers the delicious lemon lime taste of Sprite without the sugar or calories.',
    ),
    'fridgeLink' => array(
        'description' => 'This description is made to be dynamic through the use of JQuery, AJAX and JSON. This is a Coca Cola fridge which has been modelled in Blender. All models use inline X3D to istantiate a single model. I used the original Lab 2 coke can, made a slice of the vertices of one side and rotated to create a door. I then made the plug, handles, shelves and fridge interior using meshes and materials from Blender. Smaller coke cans were also placed inside. The only externally sourced texture was from Lab 2: This is the Coca Cola can which has been modelled in blender. The image that been used, is the Lab 2 image which can be found at https://canvas.sussex.ac.uk/courses/23366/pages/laboratory-2-building-3d-content-for-your-3d-app-with-3ds-max?module_item_id=1199388',
        'title' => 'Blender Coca Cola Fridge X3D',
        'titleLower' => 'History of Coca Cola (Fridge)',
        'descriptionLower' => 'It was 1886, and in New York Harbour, workers were constructing the Statue of Liberty. Eight hundred miles away, another great American symbol was about to be unveiled. Like many people who change history, John Pemberton, an Atlanta pharmacist, was inspired by simple curiosity. One afternoon, he stirred up a fragrant, caramel-coloured liquid and, when it was done, he carried it a few doors down to Jacobs Pharmacy. Here, the mixture was combined with carbonated water and sampled by customers who all agreed - this new drink was something special. So Jacobs Pharmacy put it on sale for five cents (about 3p) a glass.',
    ),
    'drPepCup' => array(
        'description' => 'This description is made to be dynamic through the use of JQuery, AJAX and JSON. This is the Dr Pepper cup which has been modelled in Blender. All models use inline X3D to istantiate a single model.  The image texture can be found from the free attibution site: www.freepnglogos.com/pics/dr-pepper-logo-png',
        'title' => 'Blender Dr Pepper Cup X3D',
        'titleLower' => 'Blender Dr Pepper Cup X3D',
        'descriptionLower' => 'Dr Peppers unique, sparkling blend of 23 fruit flavours has been around for well over a century and its still the same, with that distinctive flavour you just cant quite put your tongue on. It was created by Texas pharmacist Charles Alderton in 1885. He gave a sample of the first ever batch to Wade Morrison, a local shop owner, and Mr Morrison instantly agreed to stock the drink. The distinctive, bold taste of Dr Pepper has been popular ever since.',
    ),
);

if (isset($_GET['id']) && array_key_exists($_GET['id'], $data)) {
    echo json_encode($data[$_GET['id']]);
} else {
    echo json_encode($data['cokeLink']);  // default data
}
?>
