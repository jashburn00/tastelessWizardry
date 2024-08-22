
class Heal extends Spell{
    constructor(){
        super("Heal", 0, 100);
    }

    useOn(h, e){
        if(h.mana >= this.manaCost){
            h.mana -= this.manaCost;
            h.health += 160;
            let rec = 160;
            if(h.health > h.maxHealth){
                rec = 160 - (h.health - h.maxHealth);
                h.health = h.maxHealth;
            }
            return h.name+" used "+this.name+" and recovered "+rec+" health! (costed "+this.manaCost+" mana)");
        } else {
            return h.name+" tried to use "+this.name+", but had insufficient mana!");
        }
    }
}
