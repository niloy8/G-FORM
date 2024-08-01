
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
