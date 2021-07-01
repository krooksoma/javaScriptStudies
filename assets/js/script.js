'use strict'

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}
const displayModal = function () {
    // remove item from class list instead of whole class attribute(removeattribute('class'))
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// on a clock on the show modal the modal is displayed
for (let i = 0; i < showModal.length; i++) {
    // loop thru each button to add the event listener
    showModal[i].addEventListener('click', displayModal);
}
//to close modal window. only one is necessary because only one window is open at a time.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){//if Escape key is pressed
        if(!modal.classList.contains('hidden')){ //if modals does not have class attribute hidden
            closeModal(); 
        }
    }
})
// closeModal.addEventListener('click', function());

// overlay.addEventListener('click', function());