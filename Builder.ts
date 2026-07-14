// IMPLEMENTACIÓN DEL PATRÓN BUILDER
// Permite construir un Loadout personalizado para una skin clonada.

import { Skin } from "./Prototype.ts";
import { Weapon } from "./Observer.ts";

// Producto que será construido por el Builder.
export class Loadout {

    public skin!: Skin;
    public weapon!: Weapon;

    public pico: string = "";
    public planeador: string = "";
    public gesto: string = "";

    displayInfo(): void {

        console.log(`
----> LOADOUT PERSONALIZADO
Skin: ${this.skin.nombre}
Vida: ${this.skin.vida}
Escudo: ${this.skin.escudo}

Pico: ${this.pico}
Planeador: ${this.planeador}
Gesto: ${this.gesto}

Arma: ${this.weapon.nombre}
Rareza: ${this.weapon.rareza}
`);

    }

}

// Contrato del patrón Builder
export interface LoadoutBuilder {

    setSkin(skin: Skin): void;
    setPico(pico: string): void;
    setPlaneador(planeador: string): void;
    setGesto(gesto: string): void;
    setWeapon(weapon: Weapon): void;
    getResult(): Loadout;
}

// Implementación del Builder.
export class FortniteBuilder implements LoadoutBuilder {

    private loadout: Loadout;

    constructor() {
        this.loadout = new Loadout();
    }

    setSkin(skin: Skin): void {

        this.loadout.skin = skin;

    }

    setPico(pico: string): void {

        this.loadout.pico = pico;

    }

    setPlaneador(planeador: string): void {

        this.loadout.planeador = planeador;

    }

    setGesto(gesto: string): void {

        this.loadout.gesto = gesto;

    }

    setWeapon(weapon: Weapon): void {

        this.loadout.weapon = weapon;

    }

    getResult(): Loadout {

        return this.loadout;

    }

}