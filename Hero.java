import java.util.ArrayList;
import java.util.Scanner;

public class Hero extends Entity{
    private ArrayList<Spell> spells;
    public int mana;
    public int maxMana;
    public int level;
    private Scanner scanner = new Scanner(System.in);

    public Hero(String n){
        super(n);
        this.level = 1;
        this.health = 100; 
        this.weapon = Weapon.getNumber(0);
        this.armor = Armor.getNumber(0);
        this.maxMana = 100;
        this.mana = 100;
        this.spells = new ArrayList<Spell>();

        // this.spells.add(new Kaboom());
    }
    
    public void levelUp(){
        this.level++;
        this.maxMana += 50;
        this.mana = this.maxMana;
        this.maxHealth += 50;
        this.health = this.maxHealth;
    }

    public void displayGear(){
        System.out.println("\nYour gear: ");
        System.out.println("Weapon: "+this.weapon.name+" ("+this.weapon.damage+" damage)");
        System.out.println("Armor: "+this.armor.name+" (-"+this.armor.effectiveness+" damage taken)");
        System.out.println("Spells: ");
        for(Spell i: spells){
            System.out.println(i.name+" ("+i.damage+" damage, "+i.manaCost+" mana cost)");
        }
    }

    public Spell chooseSpell(){
        //check base case
        if(this.spells.size() == 0){
            System.out.println("You don't know any spells.");
            return new Spell();
        }

        //display options
        System.out.println("Please choose a spell: ");
        for(int i = 0; i < spells.size(); i++){
            System.out.println("  "+(i+1) +": "+spells.get(i).name);
        }

        //get input
        int choice = -1;
        if( !scanner.hasNextInt()){
            System.out.println("Invalid input. Returning to option select...");
            scanner.nextLine();
            return new Spell();
        }
        choice = scanner.nextInt();
        scanner.nextLine();
        // System.out.println("### spell choice: "+choice);
        if(choice <= this.spells.size() && choice >= 0){
            // System.out.println("### "+this.spells.get(choice-1).name);
            return spells.get(choice-1); 
        }else{
            System.out.println("Invalid spell choice. Returning to option select...");
            return new Spell();
        }
    }

    public void getReward(Armor a){
        System.out.println("You found some armor: "+a.name+". Do you want to use it? (y/n)");
        String choice = scanner.nextLine();
        if(choice.equals("y") || choice.equals("yes")){
            this.armor = a;
            System.out.println(this.name+" equipped the "+a.name+".");
        }else{
            System.out.println(this.name+" passed on the "+a.name+".");
        }
    }

    public void getReward(Weapon w){
        System.out.println("You found a weapon: "+w.name+". Do you want to use it? (y/n)");
        String choice = scanner.nextLine();
        if(choice.equals("y") || choice.equals("yes")){
            this.weapon = w;
            System.out.println(this.name+" equipped the "+w.name+".");
        }else{
            System.out.println(this.name+" passed on the "+w.name+".");
        }
    }

    public void getReward(Spell s){
        boolean flag = false;
        for (Spell i: spells){
            if(i.name == s.name){
                System.out.println("You found a spell, but you already know this one.");
                flag = true;
            }
        }
        if(!flag){
            this.spells.add(s);
            System.out.println(this.name+" found a new spell: "+s.name+". It does "+s.damage+" damage and costs "+s.manaCost+" mana.");
        }
    }
}
