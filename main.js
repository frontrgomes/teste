// Faça o consumo da API abaixo (retornará uma lista com 14 animes)
// Mostre na tela todos os animes na seguinte ordem: . primeiramente dragon_ball e naruto (não importa a ordem entre os dois) . depois o restante da listagem sem os dois primeiros já mostrados anteriormente
// Cada anime mostrado na tela deve ter o título e a imagem
// CSS de forma que desejar


async function loadPost() {
    document.getElementById("post").innerHTML = 'Carregando...';
    let req =  await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
    let json = await req.json();

    const data = json.data;

    const dbzEnaruto = [];
    const outros = [];
    
    data.forEach(anime => {
      if(anime.anime_name === 'naruto' || anime.anime_name === 'dragon_ball') {
        dbzEnaruto.push(anime);
      }else {
       outros.push(anime);
      }
    })
    
    montarAnime([...dbzEnaruto, ...outros]); 
}

function montarAnime (lista) {

    let html = '';
    for(let i in lista){
        html += `
            <div class='card-anime'>
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

