//Interface que representa o Pokémon simplificado
//para ser usado dentro do sistema
export interface PokemonResumo {
    id: number;
    nome: string;
    tipos: string[];
    altura:number;
    peso: number;
}

//Interface que representa os campos que serão usados 
//dentre todos que a API retorna
export interface PokemonApiResponse {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: {
        type: {
            name: string;
        }
    }[];
}