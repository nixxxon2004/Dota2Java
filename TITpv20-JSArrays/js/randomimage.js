const mainImage = document.querySelector("#img");
const button = document.querySelector(".btn");

const images = ["img/pic1.png","img/pic2.jpg","img/pic3.jpg","img/pic4.png"];

button.addEventListener(`click`, ()=> {
console.log("Starik sdox ");   
let rnd = Math.floor(Math.random() * images.length);
mainImage.src = images[rnd];
console.log("Random number:",rnd);
}); 