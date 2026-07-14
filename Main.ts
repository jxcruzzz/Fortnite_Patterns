// MAIN
// El cliente únicamente interactúa con el Facade.
import { FortniteFacade } from "./Facade.ts";

function main(): void {
    const game = new FortniteFacade();
    game.startGame();
}

main();