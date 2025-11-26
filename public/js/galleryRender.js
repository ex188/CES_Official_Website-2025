function renderGallery() {
  var template = `
    <a href="{{{img}}}" class="image-popup img-hover">
      <span class="icon icon-search"></span>
      <img src="{{{img}}}" alt="Image placeholder" class="img-fluid">
    </a>`;

  // please change these file to add more images
  // e.g.
  // 'img_1.jpg',
  // 'img_2.jpg',
  // 'img_3.jpg',
  // 'img_4.jpg',
  // 'img_5.jpg',
  // 'img_6.jpg',
  //  path names will be appended automatically
  //  images will appear in this order
  var strs = ["38aac9e45bd9ab5f100ab2f21b133cf8.jpg", "304dd2818206523ba2fe85e62eaa1863.JPG", "837c562af0a010840059000886ce1e52.jpg", 
    "B0001132.jpg", "b39502c8615e04de9ef032c008c31988.jpg", "Bonefire2024Fall.jpg", "Copy of DSC_0712.jpg", "DSC01752.jpg", "e457a068de651ce6b4b318a11ee38108.jpg"
  ];

  var node = document.getElementById("gallery-content");
  for (var imgPath of strs) {
    var cp = template.replace(
      "{{{img}}}",
      "images/2024-2025photo/GroupPhoto/" + imgPath
    );
    cp = cp.replace(
      "{{{img}}}",
      "images/2024-2025photo/GroupPhoto/" + imgPath
    );
    var temp = document.createElement("div");
    temp.className = "col-md-4";
    temp.innerHTML = cp;
    node.append(temp);
  }
}
