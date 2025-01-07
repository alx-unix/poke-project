export function classNameFilter(typeOfPokemon){
    let className = ""
    switch(typeOfPokemon){
        case 'normal':
            className = 'border-grey-500'
            break
        case 'fire':
            className = 'border-red-500'
            break
        case 'water':
            className = 'border-blue-500'
            break
        case 'electric':
            className = 'border-yellow-500'
            break
        case 'grass':
            className = 'border-green-500'
            break
        case 'ice':
            className = 'border-teal-200'
            break
        case 'fighting':
            className = 'border-yellow-800'
            break
        case 'poison':
            className = 'border-violet-600'
            break
        case 'ground':
            className = 'border-orange-800'
            break
        case 'flying':
            className = 'border-neutral-300'
            break
        case 'psychic':
            className = 'border-pink-700'
            break
        case 'bug':
            className = 'border-green-700'
            break
        case 'rock':
            className = 'border-neutral-200'
            break
        case 'ghost':
            className = 'border-violet-800'
            break
        case 'dragon':
            className = 'border-blue-700'
            break
        case 'dark':
            className = 'border-black'
            break
        case 'steel':
            className = 'border-neutral-200'
            break
        case 'fairy':
            className = 'border-pink-300'
            break
    }
    return className
}