// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
let button = document.querySelector(".nav-toggle");
let ul = document.querySelector(".links");
 
button.addEventListener("click", ()=>{
        ul.classList.toggle("show-links");
});
