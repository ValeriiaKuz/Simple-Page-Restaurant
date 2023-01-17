const buttonBooking= document.querySelectorAll('.book-modal');
const body = document.querySelector('body')

buttonBooking.forEach((item)=> {
    item.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.classList.remove('hidden');
        body.classList.add('hidden-overflow');

        const buttonClose = document.querySelector('.modal-close');
        buttonClose.addEventListener('click', () => {
            modal.classList.add('hidden');
            body.classList.remove('hidden-overflow');
            cleanForm()
        })
        modal.addEventListener('click',()=>{
        modal.classList.add('hidden');
        body.classList.remove('hidden-overflow');
        cleanForm()
        })

        modal.querySelector('.modal-window').addEventListener('click',(event)=>{
        event.stopPropagation();
        })
    })
})

const menuBtn = document.querySelector('.menu-nav');
menuBtn.addEventListener('click', ()=>{
    const modalMenu = document.querySelector('.modal-menu');
    modalMenu.classList.remove('hidden')

    const modalMenuClose= document.querySelector('.modal-menu-close');
    modalMenuClose.addEventListener('click',()=>{
        modalMenu.classList.add('hidden')
    })

    const modalMenuBook = document.querySelector('.modal-menu-book');
    modalMenuBook.addEventListener('click',()=>{
        modalMenu.classList.add('hidden')
    })

    const modalMenuNav =document.querySelector('.modal-menu-nav');
    modalMenuNav.addEventListener('click',()=>{
        modalMenu.classList.add('hidden')
    })
})

function cleanForm (){
    const inputModal = document.querySelectorAll('.input-modal')
    inputModal.forEach((item)=>{
    item.value=''})
    const guests = document.querySelector('.guests')
    guests.value= '';
    const time = document.querySelector('.time')
    time.value='';
}
