// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem
// A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// Ver documentação em https://pokeapi.co/
// A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png
// Essa id é retirada da API anterior

const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder');

/*const chamarRequisicao = (e) => {
  e.preventDefault();
  const requisitoPok = new XMLHttpRequest();

  requisitoPok.open('GET',`https://pokeapi.co/api/v2/pokemon/${input.value`});

  const url = `https://pokeapi.co/api/v2/pokemon/ditto'/${nomePokemon}/`requisitoPok.true

  requisitoPok.addEventListener('readystatechange',() => {
    if(requisitoPok.readyState ===4 && requisitoPok.status === 200){
      const save = JSON.parse(requisitoPok.response)
      pkmPlaceholder.=save.name

    }
  })
}

form.addEventListener('submit', (e) => chamarRequisicao(e));
*/

