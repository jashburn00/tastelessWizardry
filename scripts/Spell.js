import * as spells from './bruh.js';
export class Spell {

    constructor(n, dmg, cost, desc){
        this.damage = dmg;
        this.name = n;
        this.manaCost = cost;
        this.description = desc;
        this.url = './images/spells.jpg';
    }

    useOn(h, e){
        //default implementation
        return "DEFAULT SPELL USEON";
    }

    static getNumber(id){
        switch (id) {
            case 0: 
                return new spells.Bang();
            case 1: 
                return new spells.Krackle();
            case 2:
                return new spells.Freeze();
            case 3:
                return new spells.Heal();
            case 4: 
                return new spells.Kaboom();
            case 5:
                return new spells.Thwack();
            default:
                return new Spell();
        }
    }

}
