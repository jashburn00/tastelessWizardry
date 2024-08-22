export class Entity {

    constructor(monsterClass, n){ // 0 - 5 for creating a monster
        this.maxHealth = monsterClass * 70;
        this.health = this.maxHealth;
        this.weapon = Weapon.getNumber(monsterClass-1);
        this.armor = Armor.getNumber(monsterClass-1);
        this.name = n;
        this.isFrozen = false;
        this.frozenTurns = 0;
    }

    constructor(n){ //for declaring Hero
        this.maxHealth = 100;
        this.name = n;
        this.weapon = Weapon.getNumber(0);
        this.armor = Armor.getNumber(0);
        this.health = this.maxHealth;
        this.isFrozen = false;
        this.frozenTurns = 0;
    }
}
