import { buscarPokemon } from "./services/PokeApiService.js";
import { CatalogoPokemon } from "./services/BoxService.js";

async function main(): Promise<void> {
  console.log("Pokédex TypeScript Lite iniciada!\n");
  
  const catalogo = new CatalogoPokemon();

  // Busca válida
  const pikachu = await buscarPokemon("pikachu");
  if (pikachu !== null) catalogo.adicionarPokemon(pikachu);

  const charmander = await buscarPokemon("charmander");
  if (charmander !== null) catalogo.adicionarPokemon(charmander);

  // Tentativa de duplicata
  const pikachuDuplicado = await buscarPokemon("pikachu");
  if (pikachuDuplicado !== null) catalogo.adicionarPokemon(pikachuDuplicado);

  // Busca inválida
  await buscarPokemon("pokemon-inexistente");

  // Listagem
  catalogo.listarPokemon();

  // Remoção
  catalogo.removerPokemon(25);

  // Listagem após remoção
  catalogo.listarPokemon();
}

main();