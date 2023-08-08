const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
let body = document.querySelector("body");

btn.addEventListener("click", ()=>{
    let colorRandom = Math.floor(Math.random()*colors.length);
body.style.backgroundColor=colors[colorRandom];
color.textContent=colors[colorRandom];
color.style.color=colors[colorRandom];
})