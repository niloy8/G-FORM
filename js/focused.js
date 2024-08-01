let createForm = document.querySelectorAll('.create-form')
let formDes = document.querySelectorAll('.form-description')
const handleSidebar = e => {
    createForm.forEach(e => {
        e.classList.remove('focused')
        e.classList.remove('question-focused')
    })
    formDes.forEach(e => {
        e.classList.remove('focused')
        e.classList.remove('question-focused')
    })
    e.target.classList.add("focused")
}

const handleLoad = (e) => {
    console.log(e.target);
    e.target.classList.add("question-focused")
}

createForm.forEach(element => {
    element.addEventListener('click', handleSidebar)
});

window.addEventListener('load', () => {
    handleLoad({ target: createForm[1] })
})