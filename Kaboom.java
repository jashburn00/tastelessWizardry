public class Kaboom extends Spell {
    public Kaboom(){
        super("Kaboom", 120, 120);
    }

    @Override
    public void useOn(Hero h, Entity e){
        if(h.mana >= this.manaCost){
            h.mana -= this.manaCost;
            e.health -= this.damage;
            System.out.println(h.name+" used "+this.name+" on "+e.name+" and dealt "+this.damage+" damage! (costed "+this.manaCost+" mana)");
        } else {
            System.out.println(h.name+" tried to use "+this.name+", but had insufficient mana!");
        }
    }
}
