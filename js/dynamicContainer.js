const Input = document.querySelectorAll('.form-description input')
const descriptionFormatting = document.getElementById('description-formatting')
const formatingDiv = document.createElement('div')
formatingDiv.innerHTML = `
    <i data-tooltip="Bold"  class="fa-sharp fa-solid fa-bold"></i>
    <i data-tooltip="Italic" class="fa-solid fa-italic"></i>
    <i data-tooltip="Underline" class="fa-solid fa-underline"></i>
    <ion-icon data-tooltip="Insert Link" name="link-outline"></ion-icon>
    <i data-tooltip="Remove Formatting" class="fa-solid fa-text-slash"></i>
`

formatingDiv.classList.add('daynamic-textformat-div')
let isFocused = false

const handleDaynamicDiv = (e) => {
    if (!isFocused) {
        const target = e.target
        target.parentNode.insertBefore(formatingDiv, target.nextSibling)
        formatingDiv.style.display = ''
        isFocused = true
    }
}

const handleBlur = (ev) => {
    if (isFocused) {
        formatingDiv.style.display = 'none'
        isFocused = false
    }
}

Input.forEach(e => {
    e.addEventListener('focus', handleDaynamicDiv)
    e.addEventListener('blur', handleBlur)
})