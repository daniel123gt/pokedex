const namePokemon = document.getElementById('namePokemon')
const imgPokemon = document.getElementById('imgPokemon')
const typePokemon = document.getElementById('typePokemon')
const ability = document.getElementById('abilityList')
const abilityList = document.getElementById('abilityList')
const hp = document.querySelector('#hp')
const atack = document.querySelector('#atack')
const defense = document.querySelector('#defense')
const specialA = document.querySelector('#specialA')
const specialD = document.querySelector('#specialD')
const speed = document.querySelector('#speed')


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
    const typesPk = pokemon.types
    const hab = pokemon.abilities
    const statPk = pokemon.stats
    namePokemon.innerHTML = pokemon.name
    imgPokemon.setAttribute('src', pokemon.sprites.front_default)
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
    const ListarSt = () => {
       hp.style.width = (statPk[0].base_stat / 1.7) + '%' 
       atack.style.width = (statPk[1].base_stat / 1.7) + '%' 
       defense.style.width = (statPk[2].base_stat / 1.7) + '%' 
       specialA.style.width = (statPk[3].base_stat / 1.7) + '%'  
       specialD.style.width = (statPk[4].base_stat / 1.7) + '%' 
       speed.style.width = (statPk[5].base_stat / 1.7) + '%' 
    }
    ListarAb()
    ListarTy()
    ListarSt()
}

window.addEventListener('change', async () => {
    getApi(window.buscarPokemon.value)
    const pokemon = await getApi(window.buscarPokemon.value)
    actualizar(pokemon)
})

