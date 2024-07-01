import jsonId from './api_id.json' with {type: 'json'}

const nome_cidade = document.getElementById('pesquisa').value 
let ApiID = jsonId.id

async function PesquisarCidade(){
    try{
        let resposta = await fetch(http://api.openweathermap.org/data/2.5/weather?q=Sao Paulo,BR&appid=YOUR_API_KEY)
    }
    catch(error){
        console.error(error)
    }
}

