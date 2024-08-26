import {Weapon} from './Weapon.js';
import {Armor} from './Armor.js';

export class Entity {

    constructor(monsterClass, n, u){ // 0 - 5 for creating a monster
        this.maxHealth = monsterClass * 70;
        this.health = this.maxHealth;
        this.weapon = Weapon.getNumber(monsterClass-1);
        this.armor = Armor.getNumber(monsterClass-1);
        this.name = n;
        this.isFrozen = false;
        this.frozenTurns = 0;
        this.url = u;
        this.num_monsters = 6;
    }

    static getNumber(n){
        switch(n){
            case 0: 
                return new Entity(1, "Rabid Frog", './images/frogcutout.png');
            case 1: 
                return new Entity(2, "Common Crackhead", './images/bumcutout.png');
            case 2:
                return new Entity(3, "Javier Bardem", './images/javierbardemcutout.png');
            case 3:
                return new Entity(4, "Cursed Spartan", './images/spartancutout.png');
            case 4:
                return new Entity(5, "Minotaur", './images/minotaurcutout.png');
            case 5:
                return new Entity(6, "Gigatroll", './images/trollcutout.png');
        }
    }
}
