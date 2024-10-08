export class Armor {

    constructor(n, eff, u){
        this.name = n;
        this.effectiveness = eff;
        this.url = u;
    }

    static getNumber(id){
        switch (id) { //cases 0 - 5 inclusive
            case 0:
                return new Armor("Stinky Socks", 4, "./images/socks.jpg");
            case 1: 
                return new Armor("Cardboard Box", 10, "./images/box.PNG");
            case 2:
                return new Armor("Warding Robes", 20, './images/robes.jpg');
            case 3: 
                return new Armor("Chain Mail", 35, './images/chainmail.jpg');
            case 4:
                return new Armor("Heavy Iron", 49, './images/heavyarmor.PNG');
            case 5:
                return new Armor("Holy Armor", 60, './images/holyarmor.PNG');
            default:
                return new Armor("DEFAULT ARMOR", 0, './images/box.PNG');
        }
    }
}
