const salonsGrid = document.querySelector('.salons_box');
// const card = document.querySelector('.card_salons');
const galery = document.querySelector('.galery')
const formContact = document.querySelector('.contact_form');
const linksNavbar = document.querySelectorAll('#responsive');
const links = document.querySelectorAll('#normal_list');
const messageContact = document.querySelector('.contact_form_message');
const btnGalery = document.querySelector(".btnInput")
const btnSalons= document.querySelector(".btn")
const btn = document.getElementById('btn')
const span = document.getElementById('contactName')
const option = document.querySelector('a[href^="#')
const alertMEnssage = document.querySelector('#alert')

option.forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            })
        }
    })
})

function sendContact(){

    formContact.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const tel = document.getElementById("tel").value

        let checkInput = checkInputsValuesEmpty(name, email,tel)

        if(checkInput == false){

            alertMEnssage.style.display = 'block'

            setTimeout(()=>{
                alertMEnssage.style.display = 'none'
            },4000)

        }else{

            formContact.style.display = "none";
            messageContact.style.display = "block";
            span.textContent = name

            setTimeout(()=>{
                formContact.style.display = "none";
                messageContact.style.display = "block";

                formContact.reset()
            },6000)
        }

        
    })

}

function checkInputsValuesEmpty(name, email, tel){

    if(name == "" || null || email == ""|| null || tel == "" || null){
        return false
    }else{
        return true
    }
}

function galeryView(){
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        salonsGrid.style.display = "none";
        galery.style.display = "flex";
    })
}


function salonsInfoView(){
    btnGalery.addEventListener('click', (event) => {
        event.preventDefault()
        salonsGrid.style.display = "grid";
        galery.style.display = "none";
    })
}




