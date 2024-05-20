function Mudar(){
    const body = document.getElementsByTagName('html')
    body[0].style.opacity = '0'
    setTimeout(function(){
        window.location.replace('html2.html')
    },400)
}
window.onload = function(){
    const html = document.getElementsByClassName('html')
    html[0].style.opacity = '1'
}