const Input = document.querySelectorAll('.form-description input')
const descriptionFormatting = document.getElementById('description-formatting')
const formatingDiv = document.createElement('div')
formatingDiv.innerHTML = `
    <i data-tooltip="Bold"  class="fa-sharp fa-solid fa-bold"></i>
    <i data-tooltip="Italic" class="fa-solid fa-italic"></i>
    <i data-tooltip="Underline" class="fa-solid fa-underline"></i>
    <div data-tooltip="Insert Link" class="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5f6368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2">
            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
            <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
    </div>
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