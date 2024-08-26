export class Weapon {

    constructor(n, d, u){
        if(n == null){
            this.name = "DEFAULT";
        } else{
            this.name = n;
        }
        if (d==null){
            this.damage = 0;
        } else {
            this.damage = d;
        }
        if(u == null){
            this.u = "./images/toothpick.jpg";
        }else{
            this.url = u;
        }
    }
    
    useOn(h, m){ //should return values
        
        let loss = Math.max(this.damage - m.armor.effectiveness, 0);        m.health -= loss;
        
        if(loss <= 0){
            return "\nThe "+m.name+" was not damaged by the "+this.name+"!";
        }else{
            return "\n"+m.name+"'s defenses were brutally penetrated by "+h.name+"'s "+this.name+" for "+loss+" damage!";
        }
    }

    static getNumber(id){
        switch (id){ 
            case 0: //starting weapon
                return new Weapon("Toothpick", 20000, "./images/toothpick.jpg");
            case 1:
                return new Weapon("Big Stick", 35, "./images/stick.png");
            case 2:
                return new Weapon("Tiger Bone", 60, "./images/tigerbone.jpg");
            case 3:
                return new Weapon("Elemental Blade", 85, "./images/elementalsword,jpg");
            case 4: 
                return new Weapon("Flaming Halberd", 105, "./images/flaminghalberd.jpg");
            case 5:
                return new Weapon("Holy Sword", 140, "./images/holysword.jpeg");
            default:
                //default weapon
                return new Weapon("DEFAULT WEAPON", 0, "");
        }
    }
}
