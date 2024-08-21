public class Entity {
    public int health;
    public int maxHealth;
    public Weapon weapon;
    public Armor armor;
    public String name;
    public boolean isFrozen = false;
    public int frozenTurns = 0;

    public Entity(int monsterClass, String n){ // 0 - 5 for creating a monster
        this.maxHealth = monsterClass * 70;
        this.health = this.maxHealth;
        this.weapon = Weapon.getNumber(monsterClass-1);
        this.armor = Armor.getNumber(monsterClass-1);
        this.name = n;
    }

    public Entity(String n){ //for declaring Hero
        this.maxHealth = 100;
        this.name = n;
        this.weapon = Weapon.getNumber(0);
        this.armor = Armor.getNumber(0);
        this.health = this.maxHealth;
    }
}
