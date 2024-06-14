function RgbAleatorio() {
    return Math.floor(Math.random() * 256)
}

function fazerRgb(){
    const root = document.documentElement
    root.style.setProperty('--red', RgbAleatorio())
    root.style.setProperty('--green', RgbAleatorio())
    root.style.setProperty('--blue', RgbAleatorio())
}

setInterval(fazerRgb, 1000)