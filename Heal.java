
public class Heal extends Spell{
    public Heal(){
        super("Heal", 0, 100);
    }

    @Override
    public void useOn(Hero h, Entity e){
        if(h.mana >= this.manaCost){
            h.mana -= this.manaCost;
            h.health += 160;
            int rec = 160;
            if(h.health > h.maxHealth){
                rec = 160 - (h.health - h.maxHealth);
                h.health = h.maxHealth;
            }
            System.out.println(h.name+" used "+this.name+" and recovered "+rec+" health! (costed "+this.manaCost+" mana)");
        } else {
            System.out.println(h.name+" tried to use "+this.name+", but had insufficient mana!");
        }
    }
}
