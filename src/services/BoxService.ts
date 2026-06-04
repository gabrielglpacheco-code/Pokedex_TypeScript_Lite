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
}