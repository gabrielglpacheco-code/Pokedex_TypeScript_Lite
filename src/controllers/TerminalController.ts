import { buscarPokemon } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../services/BoxService.js";

export class TerminalController {
    private catalogo: CatalogoPokemon = new CatalogoPokemon();

    async buscarEAdicionar(identificador: string | number): Promise<void> {
        const pokemon = await buscarPokemon(identificador);
        if (pokemon !== null) {
            this.catalogo.adicionarPokemon(pokemon);
        }
    }

    listar(): void {
        this.catalogo.listarPokemon();
    }

    remover(id: number): void {
        this.catalogo.removerPokemon(id);
    }
}