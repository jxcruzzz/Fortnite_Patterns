// IMPLEMENTACIÓN DEL PATRÓN DECORATOR
// Agrega beneficios al jugador sin modificar la clase principal.

// Component
export interface PlayerBenefits {

    showBenefits(): void;

}

// Concrete Component
export class BasicPlayer implements PlayerBenefits {

    showBenefits(): void {
        console.log("Beneficios del jugador:");
        console.log("- Acceso al juego");

    }

}

// Decorator Base
export abstract class BenefitsDecorator implements PlayerBenefits {

    protected player: PlayerBenefits;

    constructor(player: PlayerBenefits) {
        this.player = player;

    }

    showBenefits(): void {
        this.player.showBenefits();

    }

}

// Concrete Decorator: Battle Pass
export class BattlePassDecorator extends BenefitsDecorator {

    override showBenefits(): void {

        super.showBenefits();
        console.log("- Battle Pass");
        console.log("- Recompensas Exclusivas");
        console.log("- Misiones Semanales");

    }

}

// Concrete Decorator: Fortnite Crew
export class CrewDecorator extends BenefitsDecorator {

    override showBenefits(): void {

        super.showBenefits();
        console.log("- Fortnite Crew");
        console.log("- 1000 Pavos");
        console.log("- Skin Mensual");

    }
}