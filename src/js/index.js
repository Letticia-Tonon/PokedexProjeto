/* Quando clicar no pokemon da listagem, temos que esconder o cartao que ja estava aberto e mostrar o cartao 
correspondente ao que foi escolhido para abrir 

para isso vamos precisar trabalhar com dois elementos:
1- listagem 
2- cartao do pokemon

criaremos duas variáveis no JS para trabalhar com os elementos da tela
vamos precisar trabalhar com o evento e clique pelo usuario na listagem de pokemons
-remover classe aberto só do cartao que esta aberto
-ao clicar em pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
-remover a classe ativo que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado
*/

//precisamos criar duas variáveis no JS para trabalhar com elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

//clique e remover classe aberta do pikachu
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //esconder
        const cartaoPokemonAberto= document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove("aberto")

        //pegar id, e selecionar certinho
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //acertando corzinha do selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})