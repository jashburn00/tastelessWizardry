import { Entity } from "./Entity.js";
import {Armor} from "./Armor.js";
import {Weapon} from "./Weapon.js";

export class Hero extends Entity{
    constructor(n){
        super(n);
        this.level = 1;
        this.health = 100; 
        this.weapon = Weapon.getNumber(0);
        this.armor = Armor.getNumber(0);
        this.maxMana = 100;
        this.mana = 100;
        this.spells = [];
    }
    
    levelUp(){
        this.level++;
        this.maxMana += 50;
        this.mana = this.maxMana;
        this.maxHealth += 50;
        this.health = this.maxHealth;
    }

    useSpell(spell){
        if (this.mana < spell.manaCost){
            return false;
        }else{
            spell.useOn(this, monster);
            return true;
        }
    }

    getReward(a){
        // System.out.println("You found some armor: "+a.name+". Do you want to use it? (y/n)");
        // choice = scanner.nextLine();
        // if(choice.equals("y") || choice.equals("yes")){
        //     this.armor = a;
        //     System.out.println(this.name+" equipped the "+a.name+".");
        // }else{
        //     System.out.println(this.name+" passed on the "+a.name+".");
        // }
    }

    getReward(w){
        // System.out.println("You found a weapon: "+w.name+". Do you want to use it? (y/n)");
        // String choice = scanner.nextLine();
        // if(choice.equals("y") || choice.equals("yes")){
        //     this.weapon = w;
        //     System.out.println(this.name+" equipped the "+w.name+".");
        // }else{
        //     System.out.println(this.name+" passed on the "+w.name+".");
        // }
    }

    getReward(s){
    //     boolean flag = false;
    //     for (Spell i: spells){
    //         if(i.name == s.name){
    //             System.out.println("You found a spell, but you already know this one.");
    //             flag = true;
    //         }
    //     }
    //     if(!flag){
    //         this.spells.add(s);
    //         System.out.println(this.name+" found a new spell: "+s.name+". It does "+s.damage+" damage and costs "+s.manaCost+" mana.");
    //     }
    }
}
