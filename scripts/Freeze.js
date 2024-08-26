import {Spell} from './Spell.js';

export class Freeze extends Spell {
    constructor(){
        super("Freeze", 0, 45, "Freezes the enemy for two turns.");
    }

    useOn(h, e){
        if(h.mana >= this.manaCost){
            h.mana -= this.manaCost;
            e.isFrozen = true;
            e.frozenTurns = 2;
            return h.name+" froze "+e.name+"! (costed "+this.manaCost+" mana)";
        } else {
            return h.name+" tried to use "+this.name+", but had insufficient mana!";
        }
    }
}
