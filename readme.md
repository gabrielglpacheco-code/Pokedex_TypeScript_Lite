# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação back-end simples desenvolvida em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza os resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01:
- Node.js
- TypeScript
- Interfaces e tipagem
- Funções assíncronas com async/await
- Fetch para consumo de API externa
- Arrays e métodos de array
- Orientação a Objetos com classes
- Tratamento de erros com try/catch
- GitHub e GitFlow
- Kanban

## Tecnologias utilizadas
- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git

## Como instalar

Clone o repositório:
```bash
git clone https://github.com/gabrielglpacheco-code/Pokedex_Typescript_Lite.git
```

Acesse a pasta do projeto:
```bash
cd Pokedex_Typescript_Lite
```

Instale as dependências:
```bash
npm install
```

## Como executar

Execute o projeto em ambiente de desenvolvimento:
```bash
npm run dev
```

## Funcionalidades

- Buscar Pokémon por nome ou ID na PokeAPI
- Tratar erro de Pokémon inexistente sem quebrar o sistema
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado pelo ID
- Listar catálogo com peso total
- Remover Pokémon por ID
- Exibir mensagens claras no terminal

## Estrutura do projeto

pokedex-typescript-lite/
│
├── src/
│   ├── main.ts                        # Ponto de entrada da aplicação
│   ├── controllers/
│   │   └── TerminalController.ts      # Orquestra as ações do terminal
│   ├── services/
│   │   ├── PokeApiService.ts          # Busca pokémons na PokeAPI
│   │   └── BoxService.ts              # Gerencia o catálogo local
│   ├── models/
│   │   └── Pokemon.ts                 # Interfaces de tipagem
│   └── utils/
│       └── textFormatters.ts          # Funções utilitárias de formatação
│
├── package.json
├── tsconfig.json
└── README.md

## Exemplos de execução

### Busca válida

Entrada: "pikachu"
Saída:
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

### Busca inválida

Entrada: "pokemon-inexistente"
Saída:
[ERRO] Pokémon não encontrado: pokemon-inexistente

### Duplicidade

Entrada: adicionar pikachu duas vezes
Saída:
[Aviso] pikachu já está no catálogo.

### Remoção

Entrada: remover ID 25
Saída:
[OK] Pokémon 25 removido do catálogo.

## Conceitos aplicados

### TypeScript
Todos os arquivos usam tipagem forte — interfaces, parâmetros e retornos tipados em todas as funções.

### Interface PokemonResumo
Representa o formato simplificado do Pokémon usado internamente no sistema, com campos em português.

### Fetch e async/await
A função `buscarPokemon` usa `fetch` com `async/await` para consultar a PokeAPI de forma assíncrona.

### Tratamento de erros
O sistema usa `try/catch` e verificação do `resposta.ok` para tratar pokémons inexistentes e erros de conexão sem quebrar o programa.

### Métodos de array
- `map` — extrai nomes dos tipos da API
- `some` — verifica duplicidade no catálogo
- `find` — verifica se pokémon existe antes de remover
- `filter` — remove pokémon pelo ID
- `forEach` — exibe cada pokémon na listagem
- `reduce` — calcula peso total do catálogo

### Classe CatalogoPokemon
Classe com atributo privado `catalogo` e métodos `adicionarPokemon`, `listarPokemon` e `removerPokemon`.

## Organização do Kanban

[Acessar Kanban](https://github.com/users/gabrielglpacheco-code/projects/1/views/1)

## Branches utilizadas

- `main`
- `develop`
- `feat/pokedex`
- `docs/readme`