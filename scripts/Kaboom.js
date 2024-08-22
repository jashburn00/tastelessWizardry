class Kaboom extends Spell {
    constructor(){
        super("Kaboom", 120, 120);
    }

    useOn(h, e){
        if(h.mana >= this.manaCost){
            h.mana -= this.manaCost;
            e.health -= this.damage;
            return h.name+" used "+this.name+" on "+e.name+" and dealt "+this.damage+" damage! (costed "+this.manaCost+" mana)";
        } else {
            return h.name+" tried to use "+this.name+", but had insufficient mana!";
        }
    }
}
