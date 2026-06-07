import type { PokemonResumo } from "../models/Pokemon.js";
import { formatarPokemon } from "../utils/textFormatters.js";

//Classe responsável por administrar o catálogo local de Pokémons
export class CatalogoPokemon {
    private catalogo: PokemonResumo[] = [];

    //Adiciona Pokémon ao catálogo, some() retorna true caso já tenha algum item igual e impede duplicata
    adicionarPokemon(pokemon: PokemonResumo): void {
        const existe = this.catalogo.some((item) => item.id === pokemon.id);
        if (existe) {
            console.log(`[Aviso] ${pokemon.nome} já está no catálogo.`);
            return;
        }
        this.catalogo.push(pokemon);
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    }

    //Método para lsitar os Pokémons do catálogo, verifica se está vazio antes de executar
    //foreach() percorre cada Pokémon e exibe no terminal
    //reduce() soma acumulando o peso de todos os Pokémons do catálogo
    listarPokemon(): void {
        if (this.catalogo.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }
        console.log("Catálogo atual:");
        this.catalogo.forEach((pokemon) => {
            console.log(formatarPokemon(pokemon));
        });
        const pesoTotal = this.catalogo.reduce((acc, p) => acc + p.peso, 0);
        console.log(`Peso total dos Pokémons do catálogo: ${pesoTotal}`);
    }

    //Método para remover um Pokémon do catálogo pelo ID
    //find() retorna o Pokémon com o ID especificado
    //fiter() retorna um novo array sem o Pokémon com ID especificado 
    removerPokemon(id: number): void {
        const existe = this.catalogo.find((pokemon) => pokemon.id === id);
        if (!existe) {
            console.log(`[AVISO] Nenhum Pokémon encontrado com o ID: ${id}`);
            return;
        }
        this.catalogo = this.catalogo.filter((pokemon) => pokemon.id !== id);
        console.log(`[OK] Pokémon ${id} removido do catálogo.`);
    }
}