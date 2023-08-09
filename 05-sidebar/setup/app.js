const toggle = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

toggle.addEventListener('click', ( )=>{
    sideBar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener('click' , ()=>{
    sideBar.classList.remove("show-sidebar");
});
