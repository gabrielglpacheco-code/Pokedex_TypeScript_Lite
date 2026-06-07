import type { PokemonResumo } from "../models/Pokemon.js";

export class CatalogoPokemon {
    private catalogo: PokemonResumo[] = [];

    adicionarPokemon(pokemon: PokemonResumo): void {
        const existe = this.catalogo.some((item) => item.id === pokemon.id);

        if (existe) {
            console.log(`[Aviso] ${pokemon.nome} já está no catálogo.`);
            return;
        }

        this.catalogo.push(pokemon);
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    }

    listarPokemon(): void {
        if (this.catalogo.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }

        console.log("Catálogo atual:");

        this.catalogo.forEach((pokemon) => {
            console.log(
                `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
            );
        });

        const pesoTotal = this.catalogo.reduce((acc, p) => acc + p.peso, 0);
        console.log(`Peso total dos Pokémons do catálogo: ${pesoTotal}`);

    }

    removerPokemon(id: number): void{
        const existe = this.catalogo.find((pokemon) => pokemon.id === id);

        if (!existe) {
            console.log(`[AVISO] Nenhum Pokémon encontrado com o ID: ${id}`);
            return;
        }

        this.catalogo = this.catalogo.filter((pokemon) => pokemon.id !== id);
        console.log(`[OK] Pokémon ${id} removido do catálogo`);
    }


}
