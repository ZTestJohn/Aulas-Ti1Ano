import jsonId from './api_id.json' with {type: 'json'}

const cidade_pesquisa = document.getElementById('pesquisa')
const info = document.querySelector('#info')
const ceu = document.getElementById('ceu')
const nome_cidade = document.getElementById('nome')
const enter = document.getElementById('enter')
const min_temp = document.getElementById('min_temp')
const temp = document.getElementById('temp')
const max_temp = document.getElementById('max_temp')
const feel = document.getElementById('feel')
const humid = document.getElementById('humid')
const vento_vl = document.getElementById('vento_vl')
const img_result = document.getElementById('imagem-result')
let ApiID = jsonId.id

enter.addEventListener('click', 
    async function PesquisarCidade(){
        try{
            let cidade = cidade_pesquisa.value
            let resposta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&appid=${ApiID}&lang=pt`)
            resposta = await resposta.json()
            if (resposta.name === undefined){
                img_result.style.transform = 'scale(100%) translateY(0)'
                nome_cidade.innerText = 'Não encontrado'
                img_result.src = 'https://tabler.io/_next/image?url=%2Fillustrations%2Fdark%2Fnot-found.png&w=800&q=75'
                throw new Error('Não encontrado')
            }
            info.classList.remove('escondido')
            info.classList.add('visivel')
            nome_cidade.innerText = resposta.name
            let icon = resposta.weather[0].icon
            let img_url_icon = `http://openweathermap.org/img/wn/${icon}@4x.png`
            img_result.src = img_url_icon
            ceu.innerText = resposta.weather[0].description
            min_temp.innerText = `${(resposta.main.temp_min - 273.15).toFixed(2)} ºC`
            temp.innerText = `${(resposta.main.temp - 273.15).toFixed(2)} ºC`
            max_temp.innerText = `${(resposta.main.temp_max - 273.15).toFixed(2)} ºC`
            feel.innerText = `${(resposta.main.feels_like - 273.15).toFixed(2)} ºC`
            humid.innerText = `${resposta.main.humidity}%`
            vento_vl.innerText = `${resposta.wind.speed} m/s`
        }
        catch(error){
            console.error(error)
        }
    }
)





