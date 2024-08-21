import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class DoAll {
    /*
     * RULES:
     *  You are an adventurer moving through a cave. 
     *  Entities will try to stop you.
     *  You can fight or appease Entities by giving them stuff.
     */
    private static Scanner scanner = new Scanner(System.in);
    private static ArrayList<String> monsterNames = new ArrayList<String>(Arrays.asList("Rabid Frog","Common Crackhead","Javier Bardem","Cursed Spartan","Minotaur","Megatroll"));

    public static void main(String[] args){
        
        System.out.println("Starting game...\n");
        System.out.println("------ ADVENTURE DUNGEON ------");
        System.out.println("Please enter a name for your Hero: ");
        String toBeHeroName = scanner.nextLine();
        Hero player = new Hero(toBeHeroName);
        
        System.out.println("\n"+player.name+" entered the forbidden cave, seeking the great wisdom said to lie within...");
        //loop through enemies for battling
        boolean lost = false;
        for(int i = 0; i < monsterNames.size(); i++){
            Battle b = new Battle(player, new Entity(i+1, monsterNames.get(i)));
            if (b.beginTurns() == 1){
                lost = true;
                break;
            }
            System.out.println(player.name+" continued through the cave.");

        }
        if(lost){
            System.out.println("\nGame Over!\n");
        }else{
            System.out.println(player.name+" made it to the heart of the cave!\nInside a small chest laid a scroll containing the greatest wisdom ever known,\nhidden away for generations:\n\n'McDonalds is better than In-N-Out.'");
        }
    }
}