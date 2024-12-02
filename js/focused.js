let createForm = document.querySelectorAll('.create-form');
let formDes = document.querySelectorAll('.form-description');
const titleForm = document.getElementsByClassName('body-title-input')[0];

const handleSidebar = e => {
    createForm.forEach(e => {
        e.classList.remove('focused');
        e.classList.remove('question-focused');
    });
    titleForm.parentElement.classList.remove('focused');
    formDes.forEach(e => {
        e.classList.remove('focused');
        e.classList.remove('question-focused');
    });

    if (e.target.tagName === 'INPUT') {
        e.target.parentNode.classList.add('focused');
    } else {
        e.target.classList.add('focused');
    }
};

const handleLoad = e => {
    e.target.classList.add('question-focused');
};

createForm.forEach(element => {
    element.addEventListener('click', handleSidebar);
});

window.addEventListener('load', () => {
    handleLoad({ target: createForm[1] });
});

const div = document.querySelector('.hello');
