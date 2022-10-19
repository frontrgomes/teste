
async function loadPost() {
    document.getElementById("post").innerHTML = 'Carregando...';
    let req =  await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    let json = await req.json();
    montarPokemon(json.data);
}

function montarPokemon (lista) {
    let html = '';
    for(let i in lista){
        html += `
            <div class='card-pokemon'>
                <div class='image'>
                    <img src="${lista[i].anime_img}"/>
                </div>
                <div class='descricao'>
                    <div class='titulo'>${lista[i].anime_name}</div>
                </div>
            </div>
        `;
    }
    document.getElementById("post").innerHTML = html;
}
loadPost();

// $(document).ready(function() {
   
// });