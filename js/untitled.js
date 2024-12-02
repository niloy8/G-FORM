const form = document.querySelector('.form input');
const title = 'Untitled Form';
form.value = title;
const formInput = document.querySelector('.title-description input');
formInput.value = form.value;

const handleFocusChange = e => {
    if (e.type === 'blur') {
        formInput.value = e.target.value;
    }
};

const handleFocusChange1 = e => {
    if (e.target.value === '') {
        formInput.value = form.value;
    }
};

form.addEventListener('blur', handleFocusChange);
formInput.addEventListener('keyup', handleFocusChange1);

// Underline

const canvas = document.createElement('canvas');
const render = canvas.getContext('2d');
render.font = window.getComputedStyle(form).font;

function setUnderWidth(text) {
    const length = render.measureText(text).width;
    titleUnderline.style.width = length > 590 ? '590px' : `${length + 10}px`;
}

const titleUnderline = document.querySelector('.title-underline');
const handleUnderline = e => {
    e.target.parentNode.classList.add('title-focused');
    setUnderWidth(e.target.value);
};

const handleUnderline1 = e => {
    e.target.parentNode.classList.remove('title-focused');
    if (e.target.value === '') {
        form.value = 'Untitled Form';
        setUnderWidth(form.value);
        formInput.value = form.value;
    }
};

const handleUnderline2 = e => {
    setUnderWidth(e.target.value);

    if (e.target.value === '') {
        titleUnderline.style.width = `20px`;
    }
};

form.addEventListener('focus', handleUnderline);
form.addEventListener('blur', handleUnderline1);
form.addEventListener('input', handleUnderline2);
