import { buscarPokemon } from "./services/PokeApiService.js";
import { CatalogoPokemon } from "./services/BoxService.js";

async function main(): Promise<void> {
  const catalogo = new CatalogoPokemon();

  const pikachu = await buscarPokemon("pikachu");
  
  if (pikachu !== null) {
    catalogo.adicionarPokemon(pikachu);
    catalogo.adicionarPokemon(pikachu); // tentativa de duplicata
  }
}

main();