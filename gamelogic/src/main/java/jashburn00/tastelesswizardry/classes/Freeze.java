public class Freeze extends Spell {
    public Freeze(){
        super("Freeze", 0, 45);
    }

    @Override
    public void useOn(Hero h, Entity e){
        if(h.mana >= this.manaCost){
            h.mana -= this.manaCost;
            e.isFrozen = true;
            e.frozenTurns = 2;
            System.out.println(h.name+" froze "+e.name+"! (costed "+this.manaCost+" mana)");
        } else {
            System.out.println(h.name+" tried to use "+this.name+", but had insufficient mana!");
        }
    }
}
