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
  var strs = ["38aac9e45bd9ab5f100ab2f21b133cf8.jpg", "55f23fb465dca08addbcf0c24d28df73.jpg", "304dd2818206523ba2fe85e62eaa1863.JPG", 
    "837c562af0a010840059000886ce1e52.jpg", "940714a56b7f0e2eeefc02fc8b10ca9c.jpg", "a013c4da65f61e8abf317b994a9d029b.jpg", 
    "b654fdfc46b0778304bc3aec67b0b687.jpg", "b39502c8615e04de9ef032c008c31988.jpg", "e457a068de651ce6b4b318a11ee38108.jpg"
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
