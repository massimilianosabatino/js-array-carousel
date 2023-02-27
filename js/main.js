'use strict';

//array images
const images = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

//Call html
const slider = document.querySelector('.slider');
const frameImg = document.querySelector('img');


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
        current ++;
        singleImg[current].classList.add('show');
     } else if (current === images.length - 1) {
        singleImg[current].classList.remove('show');
        current = 0;
        singleImg[current].classList.add('show');
     }
})

//Cicle prev image
document.querySelector('.prev').addEventListener('click', function(){
    if (current > 0) {
       singleImg[current].classList.remove('show');
       current --;
       singleImg[current].classList.add('show');
    } else if (current === 0) {
        singleImg[current].classList.remove('show');
        current = images.length - 1;
        singleImg[current].classList.add('show');
     }
})



//Creare una variabile da riferimento per l'indice dell'array con le immagini ( 0) 
//Creare un evento in ascolto sul click del mouse associato alla freccia sotto  
//SE indice array è minore della lunghezza dell'array - 1 
//   - clicco rimuove la classe switch  
//   - Richiama la variabile collegata all'array e la aumento di uno  
//   - Aggiunge la classe di switch  
