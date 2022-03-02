const home = document.getElementsByClassName ("home")[0]
const illustration = document.getElementsByClassName ("illustration")[0]
const about = document.getElementsByClassName ("about")[0]
const footer = document.getElementsByClassName ("footer")[0]
const main = document.getElementById("main")

const botonHome = document.getElementsByClassName ("botonHome")[0]
const botonIllustration = document.getElementsByClassName ("botonIllustration")[0]
const botonAbout = document.getElementsByClassName ("botonAbout")[0]

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
    home.style.display = "none"
    about.style.display  = "none"

    illustration.style.display = "block"

    main.style.height = "auto"
}

botonIllustration.addEventListener ("click", (e)=>{
    e.preventDefault()
    cambiarIllustration()
})

const cambiarAbout = () => {
    home.style.display = "none"
    illustration.style.display = "none"

    about.style.display  = "block"

    main.style.height = "94vh"
}

botonAbout.addEventListener ("click", (e) => {
    e.preventDefault()
    cambiarAbout()
})