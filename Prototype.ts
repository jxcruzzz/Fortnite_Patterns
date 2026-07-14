// IMPLEMENTACIÓN DEL PATRÓN PROTOTYPE
// Permite clonar skins sin crearlas desde cero.

// Contrato del patrón Prototype.
export interface Prototype<T> {
    clone(): T;
}

// Clase que implementa el patrón Prototype.
export class Skin implements Prototype<Skin> {

    constructor(
        public nombre: string,
        public vida: number,
        public escudo: number
    ) { }

    clone(): Skin {

        return new Skin(
            this.nombre,
            this.vida,
            this.escudo
        );

    }

    displayInfo(): void {

        console.log(`
---- SKIN BASE ----
Vida: ${this.vida}
Escudo: ${this.escudo}
`);

    }

}

// Cliente del patrón Prototype.
export function duplicateSkin<T>(prototype: Prototype<T>): T {
    return prototype.clone();
}