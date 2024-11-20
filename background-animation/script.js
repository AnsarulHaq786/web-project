var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("original-img");
var line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

var leftSpace = imgBox.offsetLeft;

window.onresize = function () {
    leftSpace = imgBox.offsetLeft;
    originalImg.style.width = imgBox.offsetWidth + "px";
};

imgBox.onmousemove = function (e) {
    var boxWidth = (e.clientX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
};
