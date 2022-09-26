var randomNumber1 = Math.floor(Math.random() * 5) + 1; // 1 - 5

var randomContempImage = "contemp" + randomNumber1 + ".jpg"; // contemp1.jpg - contemp5.jpg

var randomImgSrc = "images/" + randomContempImage; //images/contemp1.jpg - images/contemp5.jpg

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);