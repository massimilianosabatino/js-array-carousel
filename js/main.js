'use strict';

//array images
const images = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

//Call html
const slider = document.querySelector('.slider');
const frameImg = document.querySelector('img');
const gallery = document.querySelector('.gallery');


let frame = '';
//Dinamic content
for (let i = 0; i < images.length; i++) {

    frame += `<img class="hidden" src="img/${images[i]}" alt="#">`;
}
slider.innerHTML += frame;


//Add class to show image
document.querySelector('div.slider > img').classList.add('show');

const singleImg = document.querySelectorAll('div.slider > img');

//current active image
let current = 0;

//Cicle next image
document.querySelector('.next').addEventListener('click', function(){
     if (current < images.length - 1) {
        singleImg[current].classList.remove('show');
        singleImgGallery[current].classList.remove('active');
        current ++;
        singleImg[current].classList.add('show');
        singleImgGallery[current].classList.add('active');
     } else if (current === images.length - 1) {
        singleImg[current].classList.remove('show');
        singleImgGallery[current].classList.remove('active');
        current = 0;
        singleImg[current].classList.add('show');
        singleImgGallery[current].classList.add('active');
     }
})

//Cicle prev image
document.querySelector('.prev').addEventListener('click', function(){
    if (current > 0) {
       singleImg[current].classList.remove('show');
       singleImgGallery[current].classList.remove('active');
       current --;
       singleImg[current].classList.add('show');
       singleImgGallery[current].classList.add('active');
    } else if (current === 0) {
        singleImg[current].classList.remove('show');
        singleImgGallery[current].classList.remove('active');
        current = images.length - 1;
        singleImg[current].classList.add('show');
        singleImgGallery[current].classList.add('active');
     }
})

//Side gallery
let galleryImg = '';
for (let i = 0; i < images.length; i++) {
   galleryImg += `<img class="gallery-thumb" src="img/${images[i]}" alt="#">`;
}

gallery.innerHTML += galleryImg; 
document.querySelector('div.gallery > img').classList.add('active');

const singleImgGallery = document.querySelectorAll('div.gallery > img');

let imgFull;
//Full size
singleImg[current].addEventListener('click', function() {
   let imgFullCurrent = document.createElement('img');
   imgFullCurrent.src=`img/${images[current]}`;
   imgFullCurrent.classList.add('big','hidden');
   document.body.append(imgFullCurrent)
   imgFull = document.querySelector('img.big');
   imgFull.addEventListener('click', function(){
      imgFullCurrent.classList.remove('big');
   })
})
