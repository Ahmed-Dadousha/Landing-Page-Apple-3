// Global Variables
let Image = document.querySelector(".image img");
let container = document.querySelector(".container");

//Change Phone Image
let phones= (phone)=>{
    Image.src = phone;
}
// Change Background Color
let colors = (color)=>{
    container.style.backgroundColor = color;
}