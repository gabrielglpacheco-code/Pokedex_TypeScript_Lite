console.log("pikachu, um pokemon eletrico...")

import type { PokemonResumo } from "./models/Pokemon"

const pikachu: PokemonResumo = {
    id: 25,
    nome: "pikachu",
    tipos: ["electric"],
    altura: 4,
    peso: 60,
    hp: 35,
    ataque: 55,
    defesa: 40
};

console.log(pikachu);