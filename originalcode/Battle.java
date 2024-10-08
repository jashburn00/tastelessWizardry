import java.util.Scanner;

public class Battle {
    private Hero player;
    private Entity enemy;
    Scanner scanner = new Scanner(System.in);

    public Battle(Hero h, Entity e){
        this.player = h;
        this.enemy = e;
    }

    public int beginTurns(){
        System.out.println("A "+this.enemy.name+" lept out!");
        while(enemy.health > 0){ //in battle loop
            if(player.health <= 0){ //loss condition check
                System.out.println("\n You died! \n");
                return 1;
            }
            //refill some mana 
            this.player.mana += 20;
            if(this.player.mana > this.player.maxMana){
                this.player.mana = this.player.maxMana;
            }

            //get user decision
            String choice = "";
            while (!choice.equals("1") && !choice.equals("2")){
                System.out.println("\nYour Health: "+player.health+"/"+player.maxHealth);
                System.out.println("Your Mana: "+player.mana+"/"+player.maxMana);
                System.out.println("Choose an option: ");
                System.out.println("1: Weapon Attack\n2: Use Spell\nAnyting Else: Check Gear");
                choice = scanner.nextLine();
                switch (choice) {
                    case "1": //weapon attack
                        //decrement enemy health
                        player.weapon.useOn(player, enemy);
                        break;
                    case "2": //use spell
                        //display spell list and prompt again
                        Spell usingSpell = player.chooseSpell();
                        if(usingSpell.name == "DEFAULT SPELL"){
                            choice = "";
                        }else{
                            usingSpell.useOn(player, enemy);
                        }
                        break;
                    default: //check gear
                        player.displayGear();
                        break;
                }
            }//exits here when attack or spell is chosen 

            // make enemy attack
            if(enemy.health <= 0){
                System.out.println(enemy.name+" perished.");
                break;
            }else if(this.enemy.frozenTurns > 0){
                System.out.println(this.enemy.name+" is frozen and can't move!");
                this.enemy.frozenTurns -= 1;
            }else{
                this.enemy.weapon.useOn(this.enemy, this.player);
                System.out.println(this.enemy.name+" has "+this.enemy.health+" health remaining.");
            }
        }
        //here, enemy has been defeated
        player.levelUp();
        System.out.println("You defeated "+ enemy.name + " and leveled up to level "+player.level);
        //calculate a reward
        double randy, randy2;
        for(int i = 0; i < (enemy.maxHealth/70)+1; i++){
            randy = Math.random();
            randy2 = Math.random();
            if(randy < 0.33){
                Weapon reward = Weapon.getNumber((int)(randy2*6));
                //System.out.println("You found "+reward.name+"! \nContinuing through the cave...");
                player.getReward(reward);
            }else if(randy < 0.66 ){
                Armor reward = Armor.getNumber((int)(randy2*6));
                //System.out.println("You found "+reward.name+"! \nContinuing through the cave...");
                player.getReward(reward);
            } else {
                Spell reward = Spell.getNumber((int)(randy2*6));
                //System.out.println("You found "+reward.name+"! \nContinuing through the cave...");
                player.getReward(reward);
            }
        }
        return 0;
    }
}
