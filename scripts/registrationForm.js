const registrationForm = () => {
    const btnOpenModal = document.querySelector('.registration')
    const modal = document.querySelector('.modal-registration')
    const modalTitle = modal.querySelector('.modal__title')
    const modalClose = modal.querySelector('.modal__close')

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex'
    })

    
}

registrationForm()