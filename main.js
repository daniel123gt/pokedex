const namePokemon = document.getElementById('namePokemon')
const imgPokemon = document.getElementById('imgPokemon')
const typePokemon = document.getElementById('typePokemon')
const ability = document.getElementById('abilityList')
const abilityList = document.getElementById('abilityList')

async function getApi(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
}

async function init() {
    const pokemon = await getApi(25)
    actualizar(pokemon)
}

init()

function actualizar(pokemon){
    namePokemon.innerHTML = pokemon.name
    imgPokemon.setAttribute('src', pokemon.sprites.front_default)
    const typesPk = pokemon.types
    const hab = pokemon.abilities
    ability.innerHTML = ""
    typePokemon.innerHTML = ""
    const ListarAb = () => {
        hab.forEach(element => {
            let abbLi = document.createElement("li")
            let abbLiCont = document.createTextNode(element.ability.name)
            abbLi.appendChild(abbLiCont)
            abilityList.appendChild(abbLi)
        });
    }
    const ListarTy = () => {
        i = 0
        typesPk.forEach(element => {
            let typeLi = document.createElement("li")
            let typeLiCont = document.createTextNode(element.type.name)
            typeLi.appendChild(typeLiCont)
            typePokemon.appendChild(typeLi)
            i++
        });
    }
    ListarAb()
    ListarTy()
}

window.addEventListener('change', async () => {
    getApi(window.buscarPokemon.value)
    const pokemon = await getApi(window.buscarPokemon.value)
    actualizar(pokemon)
})

