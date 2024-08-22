class Weapon {

    constructor(n, d){
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
    }
    
    useOn(u, r){ //should return values
        let loss = this.damage - r.armor.effectiveness;
        if(loss < 0){
            return u.name + " used "+this.name+" on "+r.name+" but "+r.name+"'s armor was too thick!";
        }else{
            r.health -= loss;
            return u.name + " used "+this.name+" on "+r.name+" and dealt "+loss+" damage!";
        }
    }

    getNumber(id){
        switch (id){ //need cases 0 - 5 inclusive
            case 0: //starting weapon
                return new Weapon("Toothpick", 20);
            case 1:
                return new Weapon("Big Stick", 35);
            case 2:
                return new Weapon("Tiger Bone", 60);
            case 3:
                return new Weapon("Elemental Blade", 85);
            case 4: 
                return new Weapon("Flaming Halberd", 105);
            case 5:
                return new Weapon("Holy Sword", 140);
            default:
                //default weapon
                return new Weapon("DEFAULT WEAPON", 0);
        }
    }
}
