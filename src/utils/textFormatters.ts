import type { PokemonResumo } from "../models/Pokemon.js";

//Função que formata os dados de um Pokémon antes de exibir no terminal
//Recebe PokemonResumo e retorna string formatada
export function formatarPokemon(pokemon: PokemonResumo): string {
    return `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`;
}