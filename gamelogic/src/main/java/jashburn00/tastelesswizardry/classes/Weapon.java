public class Weapon {
    public String name = "DEFAULT";
    public int damage = 0;

    public Weapon(String n, int d){
        this.name = n;
        this.damage = d;
    }
    
    public void useOn(Entity u, Entity r){ //should handle printing
        int loss = this.damage - r.armor.effectiveness;
        if(loss < 0){
            System.out.println(u.name + " used "+this.name+" on "+r.name+" but "+r.name+"'s armor was too thick!");
        }else{
            r.health -= loss;
            System.out.println(u.name + " used "+this.name+" on "+r.name+" and dealt "+loss+" damage!");
        }
    }

    public static Weapon getNumber(int id){
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
