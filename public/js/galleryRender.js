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
  var strs = ["Bonefire2024Fall.JPG", "毕业酒会2024.JPG","LB2024-2025.JPG", "DSC01734.JPG", "DSC01752.JPG", "Job_0050.jpg", "WechatIMG0aec0fbf301f17adbf7b21ac5fee7bef (1).jpeg", 
    "B0001140.jpg", "463A8617.JPG", "B0001132.jpg", "Copy of DSC_0712.JPG", 
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
