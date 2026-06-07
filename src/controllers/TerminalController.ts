import { buscarPokemon } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../services/BoxService.js";

//Classe responsável por orquestrar ações do terminal
//Atua entre PokeApiService e o catálogo local
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