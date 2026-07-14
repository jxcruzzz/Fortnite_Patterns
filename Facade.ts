// IMPLEMENTACIÓN DEL PATRÓN FACADE
// Coordina todos los patrones del proyecto.

import { Skin, duplicateSkin } from "./Prototype.ts";
import { FortniteBuilder } from "./Builder.ts";
import { BasicPlayer, BattlePassDecorator, CrewDecorator } from "./Decorator.ts";
import { Player, BuildMode, ZeroBuildMode, CreativeMode } from "./Strategy.ts";
import { Weapon, HUDObserver, InventoryObserver, MatchLogObserver } from "./Observer.ts";

export class FortniteFacade {

    startGame(): void {

        console.log(`==== FORTNITE PATTERNS ====`);

        // SKIN BASE
        const skinBase = new Skin("Skin Base", 100, 100);

        skinBase.displayInfo();

        // CREACIÓN DE SKINS
        const aura = new Skin("Aura", 100, 100);
        const skullTrooper = new Skin("Skull Trooper", 100, 100);
        const superheroe = new Skin("Superhéroe", 100, 100);

        console.log(`==== CLONANDO SKINS ====`);

        console.log("Clonando Aura...");
        const auraClone = duplicateSkin(aura);

        console.log("Clonando Skull Trooper...");
        const skullClone = duplicateSkin(skullTrooper);

        console.log("Clonando Superhéroe...");
        const superheroeClone = duplicateSkin(superheroe);

        // BUILDER
        const scar = new Weapon("Scar");
        const escopeta = new Weapon("Escopeta Corredera");
        const sniper = new Weapon("Sniper Pesado");

        const builder1 = new FortniteBuilder();

        builder1.setSkin(auraClone);
        builder1.setPico("Picahielos");
        builder1.setPlaneador("Alas Mágicas");
        builder1.setGesto("Griddy");
        builder1.setWeapon(scar);

        const auraLoadout = builder1.getResult();

        const builder2 = new FortniteBuilder();

        builder2.setSkin(skullClone);
        builder2.setPico("Guadaña");
        builder2.setPlaneador("Avión de Papel");
        builder2.setGesto("Take The L");
        builder2.setWeapon(escopeta);

        const skullLoadout = builder2.getResult();

        const builder3 = new FortniteBuilder();

        builder3.setSkin(superheroeClone);
        builder3.setPico("Pico Estrella");
        builder3.setPlaneador("Crucero Coral");
        builder3.setGesto("Risa de Burro");
        builder3.setWeapon(sniper);

        const superheroeLoadout = builder3.getResult();

        auraLoadout.displayInfo();
        skullLoadout.displayInfo();
        superheroeLoadout.displayInfo();


        // DECORATOR
        console.log(`==== BENEFICIOS DEL JUGADOR ====`);

        let benefits = new BasicPlayer();

        benefits = new BattlePassDecorator(benefits);
        benefits = new CrewDecorator(benefits);

        benefits.showBenefits();


        // STRATEGY
        console.log(`\n==== MODOS DE JUEGO ====`);

        const player = new Player(
            "Josue",
            new BuildMode()
        );

        player.startMatch();

        player.setGameMode(new ZeroBuildMode());
        player.startMatch();

        player.setGameMode(new CreativeMode());
        player.startMatch();


        // OBSERVER
        console.log(`\n==== CAMBIO DE RAREZA ====`);

        const hud = new HUDObserver();
        const inventory = new InventoryObserver();
        const log = new MatchLogObserver();

        scar.subscribe(hud);
        scar.subscribe(inventory);
        scar.subscribe(log);

        scar.changeRarity("Poco Común");
        scar.changeRarity("Rara");
        scar.changeRarity("Legendaria");

    }
}