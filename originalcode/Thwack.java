public class Thwack extends Spell {
    public Thwack(){
        super("Thwack", 0, 70);
    }

    @Override
    public void useOn(Hero h, Entity e){
        if(h.mana >= this.manaCost){
            h.mana -= this.manaCost;
            
            //determine outcome TODO: make it less broken
            double rand = Math.random();
            double entity_damage_quotient = (double)(e.health) / e.maxHealth; //1-0.01
            double player_damage_quotient = (double)(h.health)/ h.maxHealth;
            double survival_chance = (0.98 * entity_damage_quotient * player_damage_quotient);
            if(survival_chance > rand){ //survives
                System.out.println(h.name+" used "+this.name+" on "+e.name+". (costed "+this.manaCost+" mana)");
            }else{ //dies
                e.health = 0;
                System.out.println(h.name+" used "+this.name+" on "+e.name+". "+ e.name +" died instantly! (costed "+this.manaCost+" mana)");
            }
        } else {
            System.out.println(h.name+" tried to use "+this.name+", but had insufficient mana!");
        }
    }
}
