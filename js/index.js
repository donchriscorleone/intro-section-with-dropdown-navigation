const btnArrows = document.querySelectorAll('button.btn-arrow');
const burger = document.querySelector('button.btn-burger');
const closeBtn = document.querySelector('button.btn-close');
const modal = document.getElementById('modal');

let BTN_ACTIVE_CLASS = 'btn-arrow-active';

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 768) {
        reset();
    }
})

btnArrows.forEach(element => {
    element.addEventListener('click', (e) => {
        let isActive = element.classList.contains(BTN_ACTIVE_CLASS);
        isActive ? element.classList.remove(BTN_ACTIVE_CLASS) : element.classList.add(BTN_ACTIVE_CLASS);
    })
})

burger.addEventListener('click', (e) => {
    modal.showModal();
})

closeBtn.addEventListener('click', (e) => {
    modal.close();
})

function reset() {
    modal.close();
    btnArrows.forEach(element => {
        element.classList.remove(BTN_ACTIVE_CLASS);
    })
}