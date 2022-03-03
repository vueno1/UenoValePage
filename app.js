const home = document.getElementsByClassName ("home")[0]
const illustration = document.getElementsByClassName ("illustration")[0]
const about = document.getElementsByClassName ("about")[0]
const footer = document.getElementsByClassName ("footer")[0]
const main = document.getElementById("main")
const illustration_ul = document.getElementsByClassName ("illustration_ul")[0]

///////////
//BOTONES 
///////////
const botonHome = document.getElementsByClassName ("botonHome")[0]
const botonIllustration = document.getElementsByClassName ("botonIllustration")[0]
const botonAbout = document.getElementsByClassName ("botonAbout")[0]
const botonSubmenu2_digitales = document.getElementsByClassName("submenu2")[0]
const botonSubmenu2_acuarelas = document.getElementsByClassName ("submenu2")[1]

////////////
//MODAL/////
///////////
let modal = document.getElementById("myModal"); //el modal 
let modalImg = document.getElementById("img01"); //donde imprimo la imagen
let captionText = document.getElementById("caption"); //donde imprimo el nombre
let span = document.getElementsByClassName("close")[0]; //donde esta la X close.

let img = document.getElementsByClassName("myImg");// la imagen
let indice = img.length-1 //le resto 1 a la longitud para que me el ultimo index.

for (let i=0; i<=indice; i++) { 

    //click en la imagen: 
    img[i].onclick = function(){
        modal.style.display = "block"; //aparece el modal    
        modalImg.src = this.src; //traigo la imagen 
        captionText.innerHTML = this.alt; //traigo el nombre de la imgen.

        // const text = document.createElement ("p")
        // text.textContent = "hola"
        // captionText.appendChild (text)
    
        modalImg.style.height = "500px"
    }

}

// let imagenes = document.querySelectorAll (".imagenes")
// console.log (imagenes)

// for (let i=0; i<=imagenes.length; i++) {
    
//     const img = imagenes[i]

//     img.onclick = function(){
//         modal.style.display = "block"; //aparece el modal    
//         modalImg.src = this.src; //traigo la imagen 
//         captionText.innerHTML = this.alt; //traigo el nombre de la imgen.
    
//         modalImg.style.height = "500px"
//     }

// }

//X para cerrar el modal 
span.onclick = function() { 
    modal.style.display = "none";
}

////////////
//FUNCIONES 
////////////

const cambiarHome = () =>{
    home.style.display = "block"
    illustration.style.display = "none"
    about.style.display = "none"

}

botonHome.addEventListener ("click", (e) =>{
    e.preventDefault()
    cambiarHome()
})

const cambiarIllustration = () => {
    illustration.style.display = "block"
    home.style.display = "none"
    about.style.display  = "none"

    main.style.height = "100%"
}

botonSubmenu2_digitales.addEventListener ("click", (e)=>{
    e.preventDefault()
    cambiarIllustration()
})


const cambiarAbout = () => {
    home.style.display = "none"
    illustration.style.display = "none"
    about.style.display  = "block"
}

botonAbout.addEventListener ("click", (e) => {
    e.preventDefault()
    cambiarAbout()
})

///