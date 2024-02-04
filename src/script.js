const salonsGrid = document.querySelector('.salons_grid');
const card = document.querySelector('.card_salons');
const galery = document.querySelector('.galery')
const formContact = document.querySelector('.contact_form');
const linksNavbar = document.querySelectorAll('#responsive');
const links = document.querySelectorAll('#normal_list');
const messageContact = document.querySelector('.contact_form_message');


formContact.addEventListener('click', (event) => {
    event.preventDefault()
    formContact.style.display = "none";
    messageContact.style.display = "block";
    function revert(){
        formContact.style.display = "flex";
        messageContact.style.display = "none";
    }
    setTimeout(revert,3000)
})

salonsGrid.addEventListener('click', (event) => {
    event.preventDefault()
    salonsGrid.style.display = "none";
    galery.style.display = "flex";
})

galery.addEventListener('click', (event) => {
    event.preventDefault()
    salonsGrid.style.display = "grid";
    galery.style.display = "none";
})



