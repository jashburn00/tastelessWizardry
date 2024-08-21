public class Spell {
    public int damage;
    public int manaCost;
    public String name;

    public Spell(String n, int dmg, int cost){
        this.damage = dmg;
        this.name = n;
        this.manaCost = cost;
    }

    public Spell(){
        this.damage = 0;
        this.name = "DEFAULT SPELL";
        this.manaCost = 0;
    }

    public void useOn(Hero h, Entity e){
        //default implementation
        System.out.println("DEFAULT SPELL USEON");
    }

    public static Spell getNumber(int id){
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
