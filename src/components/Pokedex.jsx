import { useState,useEffect } from "react";
import {searchPokemon} from '../services/api';
import { uppercase } from "../services/uppercase";
import { classNameFilter } from "../services/classnamefilter";



function Pokedex(){
    const [query,setQuery] = useState("");
    const [pokemon,setPokemon] = useState("");
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [soundUrl,setSoundUrl] = useState("");
    const [abilities,setAbilities] = useState([])


    const handleSearch = async(e)=>{
        e.preventDefault();
        if (!query.trim()) return;
        console.log("here")
        try{
            console.log("here2")
            const pokemonFetched =await searchPokemon(query)
            setPokemon(pokemonFetched)
            setSoundUrl(pokemonFetched.cries.legacy)
            console.log(pokemonFetched)
            setError(null)
        }
        
        catch(error){
            console.error(error)
            setError("Failed to find pokemon")
        }
        finally{
            setLoading(false)
        }
    }


    function play(sound){
        new Audio(sound).play()
    }


    
    useEffect(()=>{
        play(soundUrl)
    },[soundUrl])

    return (
            <div className="container  mx-auto mt-10 flex flex-col items-center">
                <form onSubmit={handleSearch}>
                    <input className="mx-4 px-3 py-2 border-2 border-green-200 rounded-md focus:border-green-600 focus:outline-none" 
                    name = "pokemon"
                    type="text"
                    onChange={(e)=>{setQuery(e.target.value)}}
                    value = {query}
                    placeholder="Pokemon Search"
                    />
                    <button type="submit" className="search-button bg-red-600 px-4 py-2 rounded-md text-white">
                        Search
                    </button>
                </form>

                {error && <div className="error-message">{error}</div>}

                {loading? (
                    <button type="button" className="rounded-lg text-center px-4 text-white bg-emerald-600 mt-10" disabled>
                        Processing...
                    </button>
                ):(
                    <div
                        className="container w-auto flex flex-col justify-center items-center rounded-md bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-12">
                        <a href="#">
                            <img 
                                className="rounded-t-lg h-80 center border-b-2 rounded-md"
                                src={pokemon.sprites.front_default}
                                alt="pokemon picture" 
                            />
                        </a>
                        <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {uppercase(pokemon.name)}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            #{pokemon.id}
                        </p>
                        <ul className="flex">
                            {pokemon.types.map(index=>
                                <li key={pokemon.id + index.type.name} className={`px-5 py-1 border-2 m-2 rounded-2xl ${classNameFilter(index.type.name)}`}>
                                    {index.type.name}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                )}
            </div>
    )
}

export default Pokedex 