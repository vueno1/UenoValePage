const home = document.getElementsByClassName ("home")[0]
const illustration = document.getElementsByClassName ("illustration")[0]
const about = document.getElementsByClassName ("about")[0]
const footer = document.getElementsByClassName ("footer")[0]
const main = document.getElementById("main")

///////////
//BOTONES 
///////////
const botonHome = document.getElementsByClassName ("botonHome")[0]
const botonIllustration = document.getElementsByClassName ("botonIllustration")[0]
const botonAbout = document.getElementsByClassName ("botonAbout")[0]
const botonSubmenu2_digitales = document.getElementsByClassName("submenu2")[0]
const botonSubmenu2_acuarelas = document.getElementsByClassName ("submenu2")[1]

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