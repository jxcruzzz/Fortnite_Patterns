// IMPLEMENTACIÓN DEL PATRÓN STRATEGY
// Permite cambiar el modo de juego del jugador durante la ejecución.

export interface GameModeStrategy {
    startMatch(): void;

}

// Concrete Strategy: Modo Con Construcción
export class BuildMode implements GameModeStrategy {

    startMatch(): void {
        console.log("Modo de juego: Con Construcción.");
        console.log("Construcción habilitada....");

    }

}

// Concrete Strategy: Modo Sin Construcción.
export class ZeroBuildMode implements GameModeStrategy {

    startMatch(): void {
        console.log("Modo de juego: Sin Construcción.");
        console.log("Construcción deshabilitada....");

    }

}

// Concrete Strategy: Modo Creativo.
export class CreativeMode implements GameModeStrategy {

    startMatch(): void {
        console.log("Modo de juego: Creativo.");
        console.log("Construcción libre y creación de mapas...");

    }

}

// Context: Representa al jugador.
export class Player {

    private gameMode: GameModeStrategy;

    constructor(
        private nombre: string,
        gameMode: GameModeStrategy
    ) {

        this.gameMode = gameMode;
        console.log(`Se ha creado el jugador ${this.nombre}.`);

    }

    startMatch(): void {
        console.log(`\n${this.nombre} ha iniciado una partida.`);
        this.gameMode.startMatch();

    }

    setGameMode(gameMode: GameModeStrategy): void {
        this.gameMode = gameMode;
        console.log(`\n${this.nombre} selecciono un nuevo modo de juego....`);
    }

}