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
    
    useOn(u, r){ //should return values
        let loss = this.damage - r.armor.effectiveness;
        if(loss <= 0){
            return 0;
        }else{
            r.health -= loss;
            return loss;
        }
    }

    getNumber(id){
        switch (id){ //need cases 0 - 5 inclusive
            case 0: //starting weapon
                return new Weapon("Toothpick", 20, "./images/toothpick.jpg");
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
