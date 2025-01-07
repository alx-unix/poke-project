const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'



export const searchPokemon = async(query)=>{
    const response = await fetch(`${BASE_URL+query.toLowerCase()}`)
    const data = await response.json()
    return data
}