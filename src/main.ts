import { TerminalController } from "./controllers/TerminalController.js";

async function main(): Promise<void> {
    console.log("Pokédex TypeScript Lite iniciada!\n");

    const controller = new TerminalController();

    await controller.buscarEAdicionar("pikachu");
    await controller.buscarEAdicionar("charmander");
    await controller.buscarEAdicionar("pikachu");
    await controller.buscarEAdicionar("pokemon-inexistente");

    controller.listar();
    controller.remover(25);
    controller.listar();
}

main();