// export class Battle {

//     constructor(h, e){
//         this.player = h;
//         this.enemy = e;
//     }

//     beginTurns(){ //TODO
//         System.out.println("A "+this.enemy.name+" lept out!");
//         while(enemy.health > 0){ //in battle loop
//             if(player.health <= 0){ //loss condition check
//                 System.out.println("\n You died! \n");
//                 return 1;
//             }
//             //refill some mana 
//             this.player.mana += 20;
//             if(this.player.mana > this.player.maxMana){
//                 this.player.mana = this.player.maxMana;
//             }

//             //get user decision
//             String choice = "";
//             while (!choice.equals("1") && !choice.equals("2")){
//                 System.out.println("\nYour Health: "+player.health+"/"+player.maxHealth);
//                 System.out.println("Your Mana: "+player.mana+"/"+player.maxMana);
//                 System.out.println("Choose an option: ");
//                 System.out.println("1: Weapon Attack\n2: Use Spell\nAnyting Else: Check Gear");
//                 choice = scanner.nextLine();
//                 switch (choice) {
//                     case "1": //weapon attack
//                         //decrement enemy health
//                         player.weapon.useOn(player, enemy);
//                         break;
//                     case "2": //use spell
//                         //display spell list and prompt again
//                         Spell usingSpell = player.chooseSpell();
//                         if(usingSpell.name == "DEFAULT SPELL"){
//                             choice = "";
//                         }else{
//                             usingSpell.useOn(player, enemy);
//                         }
//                         break;
//                     default: //check gear
//                         player.displayGear();
//                         break;
//                 }
//             }//exits here when attack or spell is chosen 

//             // make enemy attack
//             if(enemy.health <= 0){
//                 System.out.println(enemy.name+" perished.");
//                 break;
//             }else if(this.enemy.frozenTurns > 0){
//                 System.out.println(this.enemy.name+" is frozen and can't move!");
//                 this.enemy.frozenTurns -= 1;
//             }else{
//                 this.enemy.weapon.useOn(this.enemy, this.player);
//                 System.out.println(this.enemy.name+" has "+this.enemy.health+" health remaining.");
//             }
//         }
//         //here, enemy has been defeated
//         player.levelUp();
//         System.out.println("You defeated "+ enemy.name + " and leveled up to level "+player.level);
//         //calculate a reward
//         double randy, randy2;
//         for(int i = 0; i < (enemy.maxHealth/70)+1; i++){
//             randy = Math.random();
//             randy2 = Math.random();
//             if(randy < 0.33){
//                 Weapon reward = Weapon.getNumber((int)(randy2*6));
//                 //System.out.println("You found "+reward.name+"! \nContinuing through the cave...");
//                 player.getReward(reward);
//             }else if(randy < 0.66 ){
//                 Armor reward = Armor.getNumber((int)(randy2*6));
//                 //System.out.println("You found "+reward.name+"! \nContinuing through the cave...");
//                 player.getReward(reward);
//             } else {
//                 Spell reward = Spell.getNumber((int)(randy2*6));
//                 //System.out.println("You found "+reward.name+"! \nContinuing through the cave...");
//                 player.getReward(reward);
//             }
//         }
//         return 0;
//     }
// }

import {Entity} from './Entity.js';
import {Hero} from './Hero.js';
import {Weapon} from './Weapon.js';
import {Spell} from './Spell.js';
export class Battle{

    constructor(h, m, rL){
        this.hero = h;
        this.monster = m;
        this.rewardlevel = rL;
        this.battle_over = false;
    }

    doTurn(a){
        let tString = "";
        let outcomeVal = 0;
        if(a instanceof Weapon){
            tString = a.useOn(this.hero, this.monster);
            if(this.monster.health <= 0){
                this.battle_over = true;
                outcomeVal = 1;
                this.hero.mana = Math.min(this.hero.mana+20, this.hero.maxMana);
                return {
                    text: tString+" "+this.monster.name+" died!",
                    outcome: outcomeVal
                }
            } else{
                this.hero.mana = Math.min(this.hero.mana+20, this.hero.maxMana);
                outcomeVal = 0;
            }
        }
        else if(a instanceof Spell){
            tString = a.useOn(this.hero, this.monster);
            if(this.monster.health <= 0){
                this.battle_over = true;
                outcomeVal = 1;
                this.hero.mana = Math.min(this.hero.mana+20, this.hero.maxMana);
                return {
                    text: tString+" "+this.monster.name+" died!",
                    outcome: 1
                }
            }
            else{
                this.hero.mana = Math.min(this.hero.mana+20, this.hero.maxMana);
                outcomeVal = 0;
            }
        }

        //monster attacks now
        if(this.monster.isFrozen){
            tString += this.monster.name+" was frozen and couldn't move!";   
            this.monster.frozenTurns--; 
            if (this.monster.frozenTurns == 0){
                this.monster.isFrozen = false;
                tString += " "+this.monster.name+" thawed out!";
            }
            
            return {
                text: tString,
                outcomeVal: 0
            }
        }
        ////////////////////////////////
        tString += "\n"+this.monster.weapon.useOn(this.monster, this.hero);
        if(this.hero.health <= 0){
            this.battle_over = true;
            outcomeVal = 2;
            tString += " "+this.hero.name+" got anal spiked like Gaddafi!"
            return {
                text: tString,
                outcome: outcomeVal
            };
        }else{
            return {
                text: tString,
                outcome: outcomeVal
            }
        }
        //////////////////////////////////////////////////////
    }
    
}