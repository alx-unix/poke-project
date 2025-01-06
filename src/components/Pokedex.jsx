import { useState,useEffect } from "react"
import Button from "./Button"
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'



function Pokedex(){
    const [query,setQuery] = useState("");
    const [pokemon,setPokemon] = useState("");
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true)


    const searchPokemon = async(e)=>{
        e.preventDefault();
        if (!query.trim()) return;
        if (loading) return;
        console.log("here")
        try{
            const response =await fetch(BASE_URL + query)
                if(!response.ok){
                    throw new Error("Could not find pokemon")
                }
            const data = await response.json()
            setPokemon(data)
            setError(null)
            console.log(data)
        }
        
        catch(error){
            console.error(error)
            setError("Failed to find pokemon")
        }
        finally{
            setLoading(false)
        }
    }
    
    console.log(query)
    

    return (
            <div className="container  mx-auto border-red-600 mt-10">
                <form onSubmit={searchPokemon}>
                    <input className="mx-4 px-2 py-1" 
                    name = "pokemon"
                    type="text"
                    onChange={(e)=>{setQuery(e.target.value)}}
                    value = {query}
                    placeholder="Pokemon Search"
                    />
                    <button type="submit" className="search-button bg-amber-500 px-4 py-1 rounded">
                        Search
                    </button>
                </form>

                {error && <div className="error-message">{error}</div>}

                {loading? (
                    <button type="button" className="rounded-lg text-center px-4 " disabled>
                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        ...
                        </svg>
                        Processing...
                    </button>
                ):(
                    <div
                        className="container w-auto flex flex-col justify-center items-center rounded-md bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-12">
                        <a href="#">
                            <img 
                                className="rounded-t-lg h-60 center"
                                src={pokemon.sprite.front_default}
                                alt="pokemon picture" 
                            />
                        </a>
                        <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {pokemon.name}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            id:{pokemon.id}
                        </p>
                        <button
                            type="button"
                            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-red-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Button
                        </button>
                    </div>
                </div>
                )}
            </div>
    )
}

export default Pokedex 