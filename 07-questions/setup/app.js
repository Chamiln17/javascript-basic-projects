//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", () => {

        question.classList.toggle('show-text');
        for (let i=0 ; i<questions.length ; i++) { 
            if (questions[i] !== question) {
                questions[i].classList.remove('show-text');
            }
        }
    } ) ; 
});




// traversing the dom
/* const btns = document.querySelectorAll('.question-btn');

btns.forEach(btn => {
 btn.addEventListener('click', (e) => {
    for (let i=0 ; i<btns.length ; i++) { 
        if (btns[i] !== e.currentTarget) {
            btns[i].parentElement.parentElement.classList.remove('show-text');
        }
    }
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');});

}); */
