const inputs = document.getElementsByClassName('body-input-field');
const descriptionFormatting = document.getElementById('description-formatting');
const formatDiv = document.createElement('div');
formatDiv.innerHTML = `
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
`;

formatDiv.classList.add('daynamic-textformat-div');
let isFocused = false;

formatDiv.childNodes.forEach(e => {
    e.addEventListener('click', e => { });
});

let focusTimeId;

const handleDynamicDiv = e => {
    if (!isFocused) {
        if (focusTimeId) {
            clearTimeout(focusTimeId);
            focusTimeId = null;
        }
        const { target } = e;
        formatDiv.classList.remove('hide');
        target.parentNode.insertBefore(formatDiv, target.nextSibling);
        addTitle(formatDiv);
        isFocused = true;
    }
};

const handleBlur = e => {
    if (isFocused) {
        formatDiv.classList.add('hide');
        focusTimeId = setTimeout(() => {
            formatDiv.remove();
        }, 300);
        isFocused = false;
    }
};

Array.from(inputs).forEach(e => {
    e.addEventListener('focus', handleDynamicDiv);
    e.addEventListener('blur', handleBlur);
});
