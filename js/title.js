let isWithAnimation = true;
let tooltipElement;

const onHover = e => {
    if (tooltipElement && tooltipElement.parentNode === e.currentTarget) return;

    if (timerID) {
        clearTimeout(timerID);
        timerID = null;
    }

    if (!tooltipElement) {
        tooltipElement = document.createElement('div');
    }

    const tooltip = e.currentTarget.getAttribute('data-tooltip');

    if (isWithAnimation) {
        tooltipElement.classList.add('tooltip', 'tooltip-with-animation');
        setTimeout(() => {
            tooltipElement.classList.remove('tooltip-with-animation');
        }, 300);
        isWithAnimation = false;
    } else tooltipElement.classList.add('tooltip');

    tooltipElement.innerHTML = tooltip;
    e.currentTarget.appendChild(tooltipElement);
};

let timerID;

const onMouseOut = e => {
    if (timerID) {
        clearTimeout(timerID);
        timerID = null;
    }

    timerID = setTimeout(() => {
        tooltipElement.remove();
        isWithAnimation = true;
        timerID = null;
    }, 600);
};

function addTitle(element) {
    element.childNodes.forEach(e => {
        e.addEventListener('mouseover', onHover);
        e.addEventListener('mouseout', onMouseOut);
    });
}
