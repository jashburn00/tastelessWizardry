class Thwack extends Spell {
    constructor(){
        super("Thwack", 0, 95);
    }

    useOn(h, e){
        if(h.mana >= this.manaCost){
            h.mana -= this.manaCost;
            
            //determine outcome TODO: see if this is balanced now
            let rand = Math.random();
            let entity_damage_quotient = (double)(e.health) / e.maxHealth; //1-0.01
            let player_damage_quotient = (double)(h.health)/ h.maxHealth;
            let survival_chance = 1 - (1.02 - ((player_damage_quotient + entity_damage_quotient) / 2));
            if(survival_chance > rand){ //survives
                System.out.println(h.name+" used "+this.name+" on "+e.name+". (costed "+this.manaCost+" mana)");
            }else{ //dies
                e.health = 0;
                return h.name+" used "+this.name+" on "+e.name+". "+ e.name +" died instantly! (costed "+this.manaCost+" mana)";
            }
        } else {
            return h.name+" tried to use "+this.name+", but had insufficient mana!";
        }
    }
}
