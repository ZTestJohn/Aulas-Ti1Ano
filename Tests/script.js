function Mudar(){
    const body = document.getElementsByTagName('html')
    body[0].style.display = 'none'
    setTimeout(function(){
        window.location.replace('html2.html')
    },400)
}
function carregou(){
    setTimeout(function (){
        const html = document.getElementsByClassName('html')
        html[0].style.display = 'block'
    },600)
}