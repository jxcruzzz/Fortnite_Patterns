// IMPLEMENTACIÓN DEL PATRÓN OBSERVER
// Notifica cuando un arma cambia de rareza

export interface Observer {

    update(weaponName: string, rarity: string): void;

}

// Subject
export class Weapon {

    private observers: Observer[] = [];

    constructor(
        public nombre: string,
        public rareza: string = "Común"
    ) { }

    subscribe(observer: Observer): void {

        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {

        const index = this.observers.indexOf(observer);

        if (index != -1) {
            this.observers.splice(index, 1);
        }
    }

    changeRarity(newRarity: string): void {

        this.rareza = newRarity;
        this.notify();

    }

    private notify(): void {

        this.observers.forEach(observer =>
            observer.update(this.nombre, this.rareza)
        );

    }

}

// Concrete Observer: HUD
export class HUDObserver implements Observer {

    update(weaponName: string, rarity: string): void {
        console.log(`HUD actualizado: ${weaponName} ahora es ${rarity}.`);
    }
}

// Concrete Observer: Inventario
export class InventoryObserver implements Observer {

    update(weaponName: string, rarity: string): void {
        console.log(`Inventario actualizado: ${weaponName} ahora es ${rarity}.`);
    }
}

// Concrete Observer: Registro del juego
export class MatchLogObserver implements Observer {

    update(weaponName: string, rarity: string): void {
        console.log(`Registro: Cambio de rareza detectado en ${weaponName}.`);
    }
}