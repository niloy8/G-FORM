
const form = document.querySelector('.form input')

const title = "Untitled Form"
form.value = title
const formInput = document.querySelector('.form-description input')

formInput.value = form.value

const handleFoucsChange = e => {
    if (e.type === 'blur') {
        formInput.value = e.target.value
    }
}

const handleFoucsChange1 = e => {
    if (e.target.value === '') {
        formInput.value = form.value
    }
}

form.addEventListener("blur", handleFoucsChange)
formInput.addEventListener("keyup", handleFoucsChange1)

// Underline

const titleUnderline = document.querySelector('.title-underline')
const handleUnderline = e => {
    e.target.parentNode.classList.add('title-focused')
    const canvas = document.createElement('canvas')
    const render = canvas.getContext('2d')
    const length = render.measureText(e.target.value).width + 70
    titleUnderline.style.width = `${length}px`


}
const handleUnderline1 = e => {
    e.target.parentNode.classList.remove('title-focused')

}

const handleUnderline2 = (e) => {
    const canvas = document.createElement('canvas')
    const render = canvas.getContext('2d')
    const length = render.measureText(e.target.value).width + 70

    titleUnderline.style.width = `${length}px`
    if (e.target.value === "") {
        titleUnderline.style.width = `20px`
    }
}

form.addEventListener('focus', handleUnderline)
form.addEventListener('blur', handleUnderline1)
form.addEventListener('keyup', handleUnderline2)
