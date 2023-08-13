const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const content = document.querySelectorAll('.content');

about.addEventListener('click', e=> {
    let id = e.target.dataset.id;
    if(id){
        //remove active from other buttons
        btns.forEach(btn => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active');
        //hide other articles
        content.forEach(cont => {
            cont.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})