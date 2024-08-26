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

    getNumber(id){
        switch (id) {
            case 0: 
                return new Bang();
            case 1: 
                return new Krackle();
            case 2:
                return new Freeze();
            case 3:
                return new Heal();
            case 4: 
                return new Kaboom();
            case 5:
                return new Thwack();
            default:
                return new Spell();
        }
    }

}
