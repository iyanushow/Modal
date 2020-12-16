window.onload = () => {
    const modalEffect = document.querySelector('.modal-effect'),
        modalContainer = document.querySelector('.modal-container'),
        close = document.querySelector('.close');

    modalEffect.addEventListener('click', () => {
        modalContainer.classList.add('open')
    });
    close.addEventListener('click', () => {
        modalContainer.classList.remove('open')
    })
}