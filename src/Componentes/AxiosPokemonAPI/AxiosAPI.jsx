import React, { useState } from 'react';
import axios from 'axios';
import "./AxiosPokemonAPI.css"

const AxiosPokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const FetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                const results = response.data.results;
                const pokemonDetails = results.map((pokemon, index) => ({
                    name: pokemon.name,
                    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                }));
                setPokemonList(pokemonDetails);
            })
            .catch(error => {
                console.error('Error fetching Pokémon', error);
            });
    };

    return (
        <div>
            <button onClick={FetchPokemon}> Fetch Pokémon </button>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>
                        <span> {pokemon.name} </span>
                        <img src={pokemon.imageUrl} alt={pokemon.name} />
                    </li>
                ))}
            </ul>
        </div>
    ) 
}

export default AxiosPokemonAPI;