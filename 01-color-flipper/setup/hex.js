const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
let body = document.querySelector("body");


btn.addEventListener("click", ()=>{
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber(hex.length)];
    }
    body.style.backgroundColor=hexColor;
    color.textContent=hexColor;
    color.style.color=hexColor;
})
const getRandomNumber = (num)=>{
    return Math.floor(Math.random()*num);
}










