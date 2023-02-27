'use strict';

//array images
const images = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

//Call html
const slider = document.querySelector('.slider');
const frame = document.getElementById('frame')


//Dinamic content
for (let i = 0; i < images.length; i++) {
    const imageSingle = images[i];
    slider.innerHTML += `<img class="hidden" src="img/${imageSingle}" alt="#">`;
}

//Add class to show image
frame.classList.add('show');
