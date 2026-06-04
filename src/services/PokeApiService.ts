import type { PokemonApiResponse } from "../models/Pokemon.js";
import type { PokemonResumo } from "../models/Pokemon.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function buscarPokemon(
    identificador: string | number
): Promise<PokemonResumo | null> {
    try {
        const resposta = await fetch(`${API_URL}/${identificador}`);

        if(!resposta.ok) {
            console.log(`[ERRO] Pokémon não encontrado: ${identificador}`);
            return null;
        }

        const dados: PokemonApiResponse = await resposta.json();

        const pokemonResumo: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => item.type.name),
            altura: dados.height,
            peso: dados.weight,
        };

        console.log(`[OK] Pokémon encontrado: ${pokemonResumo.nome}`);
        return pokemonResumo;

    } catch (erro) {
        console.log(`[ERRO] Não foi possível buscar o Pokémon.`);
        return null;
    }
}