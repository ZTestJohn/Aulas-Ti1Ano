import jsonId from './api_id.json' with {type: 'json'}

const cidade_pesquisa = document.getElementById('pesquisa')
const ceu = document.getElementById('ceu')
const nome_cidade = document.getElementById('nome')
const enter = document.getElementById('enter')
const min_temp = document.getElementById('min_temp')
const temp = document.getElementById('temp')
const max_temp = document.getElementById('max_temp')
const press = document.getElementById('press')
const humid = document.getElementById('humid')
const vento_vl = document.getElementById('vento_vl')
let ApiID = jsonId.id

enter.addEventListener('click', 
    async function PesquisarCidade(){
        try{
            let cidade = cidade_pesquisa.value
            let resposta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&appid=${ApiID}&lang=pt`)
            resposta = await resposta.json()
            console.log(resposta)
            console.log(cidade)
            nome_cidade.innerText = JSON.stringify(resposta.name)
            ceu.innerText = JSON.stringify(resposta.weather[0].description)
            console.log(resposta.main.temp)
            min_temp.innerText = `${resposta.main.min_temp - 273.15} ºC`
            temp.innerText = `${resposta.main.temp - 273.15} ºC`
            max_temp.innerText = `${resposta.main.max_temp - 273.15} ºC`
            // humid.innerText = `${} `
            // press.innerText = `${} `
            // vento_vl.innerText = `${} `
        }
        catch(error){
            console.error(error)
        }
    }
)





