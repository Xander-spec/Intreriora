const loginForm = () => {
    const btnOpenModal = document.querySelector('.login')
    const modal = document.querySelector('.modal-login')
    const modalTitle = modal.querySelector('.modal__title')
    const modalClose = modal.querySelector('.modal__close')

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex'
    })

    
}

loginForm()