const Input = document.querySelectorAll('.form-description input')
const daynamicContainer = document.querySelectorAll('.dynamic-container')
const p = document.createElement('p')
p.textContent = "hello world"
p.classList.add('daynamic-div')
let isFocused = false

const handleDaynamicDiv = (e) => {
    if (!isFocused) {
        const target = e.target
        target.parentNode.insertBefore(p, target.nextSibling)
        p.style.display = ''
        isFocused = true
    }
}

const handleBlur = (ev) => {
    if (isFocused) {
        const pClassname = ev.target.nextSibling
        pClassname.style.display = 'none'
        isFocused = false
    }
}

Input.forEach(e => {
    e.addEventListener('focus', handleDaynamicDiv)
    e.addEventListener('blur', handleBlur)
})