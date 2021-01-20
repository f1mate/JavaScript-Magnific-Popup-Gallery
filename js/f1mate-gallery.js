/**
 * Repository    : JavaScript-Magnific-Popup-Gallery
 * File Name     : f1mate-gallery.js
 * Published by  : F1Mate
 * Publisher URL : https://f1mate.com
 * Contributors  : f1mate, 1amitgupta (Github)
 * Version       : v1.0
 * Licence       : MIT, Copyright (c) 2021 F1 Mate (f1mate)
 * Github URL    : https://github.com/f1mate/JavaScript-Magnific-Popup-Gallery
 */

"use strict";

const f1mateGalleryDiv = document.getElementById('f1mate-gallery-div');
const f1mateImgPreview = document.getElementById('f1mate-img-preview');
const f1mateImg = document.querySelectorAll('.f1mate-img');

//function for open image viewer
const f1mateImgViewer = src => {
  f1mateImgPreview.src = src;
  f1mateGalleryDiv.classList.remove("f1mate-disp-none");
}

//add event listner to all single images
f1mateImg.forEach(item => {
  item.addEventListener('click', function (event) {
    let src = this.getAttribute('src');
    console.log(src);
    f1mateImgViewer(src);
  });
});

//manage event for close image viewer
f1mateGalleryDiv.addEventListener('click', function (event) {
  if (event.target !== f1mateImgPreview)
    f1mateGalleryDiv.classList.add("f1mate-disp-none");
});

