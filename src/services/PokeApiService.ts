import type { PokemonApiResponse } from "../models/Pokemon.js";
import type { PokemonResumo } from "../models/Pokemon.js";

//URL da API
const API_URL = "https://pokeapi.co/api/v2/pokemon";


//Função assíncrona para buscar o Pokémon na API
//Retorna um PokemonResumo ou null em caso de erro
export async function buscarPokemon(
    identificador: string | number
): Promise<PokemonResumo | null> {
    try {
        const resposta = await fetch(`${API_URL}/${identificador}`);

        //Se a resposta for diferente de OK, exibe erro e retorna null
        if(!resposta.ok) {
            console.log(`[ERRO] Pokémon não encontrado: ${identificador}`);
            return null;
        }

        //Converte a resposta para JSON já tipado
        const dados: PokemonApiResponse = await resposta.json();

        //Cria PokemonResumo de acordo com a interface criada anteriormente
        const pokemonResumo: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => item.type.name),//Percorre o array de tipos e extrai o nome de cada um
            altura: dados.height,
            peso: dados.weight,
        };

        console.log(`[OK] Pokémon encontrado: ${pokemonResumo.nome}`);
        return pokemonResumo;

    //Captura erros na requisição
    } catch (erro) {
        console.log(`[ERRO] Não foi possível buscar o Pokémon.`);
        return null;
    }
}