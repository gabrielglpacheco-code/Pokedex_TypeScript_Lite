import { buscarPokemon } from "./services/PokeApiService.js";

async function main(): Promise<void> {
  console.log("Pokédex TypeScript Lite iniciada!\n");
  console.log("Buscando Pokémon...");
  
  const pokemon = await buscarPokemon(75);
  
  console.log("Busca finalizada!");
  console.log(pokemon);
}

main();