// import { Spell } from './scripts/Spell.js';
// import { Kaboom } from './scripts/Kaboom.js';
import * as classes from './scripts/bruh.js';
let knownspells = [];
knownspells.push(new classes.Spell("balls", 50, 20));
let monstersDefeated = 0;
let playerName = "";
let hero;
let monsters = [];
for(let j = 0; j < 6; j++){
    monsters.push(classes.Entity.getNumber(j));
}
console.log(monsters);
let currBattle;
let logstring = "";
let turnResult;
let reward;

document.addEventListener('DOMContentLoaded', () => {
    const helpbutton = document.getElementById("helpbutton");
    helpbutton.addEventListener('click', () => {
        document.getElementById("helpinfo").style.display = "block";
    });

    const OKbutton = document.getElementById("OKbutton");
    OKbutton.addEventListener('click', () => {
        document.getElementById("helpinfo").style.display = "none";
    });

    const mechbutton = document.getElementById("mechanicsbutton");
    mechbutton.addEventListener('click', () => {
        document.getElementById("mechanics").style.display = "block";
    });

    const takerewardbtn = document.getElementById("yesreward");
    takerewardbtn.addEventListener('click', () => {
        //TODO: hanadle reward
        if (reward instanceof classes.Spell){
            console.log('player picked up spell' + reward.name)
            if (knownspells.indexOf(reward) != -1){
                knownspells.push(reward);
            }else{
                //already known
                logstring += "You found a new spell, but you already knew that one didn't you?.";
            }
        }else if (reward instanceof classes.Weapon){
            hero.weapon = reward;
            console.log("player picked up weapon "+reward.name);
        }else {
            //armor
            hero.armor = reward;
            console.log("player picked up armor "+reward.name);
        }
        updateUI();
        document.getElementById("rewardscreen").style.display = "none";
    });

    const noperewardbtn = document.getElementById("noreward");
    noperewardbtn.addEventListener('click', () => {
        //TODO: handle reward
        document.getElementById("rewardscreen").style.display = "none";
    });

    const OKbutton2 = document.getElementById("OKbutton2");
    OKbutton2.addEventListener('click', () => {
        document.getElementById("mechanics").style.display = "none";
    });
    
    const playerweapon = document.getElementById("equippedweapon");
    playerweapon.addEventListener('mousemove', (e) => {
        hoverWeapon(e);
    });
    playerweapon.addEventListener('mouseleave', (e) => {
        hideWeapon();
    });

    const playerarmor = document.getElementById("armor");
    playerarmor.addEventListener('mousemove', (e) => {
        hoverArmor(e);
    });
    playerarmor.addEventListener('mouseleave', (e) => {
        hidearmor();
    });
    
    const playerspells = document.getElementById("spells");
    playerspells.addEventListener('mouseenter', (e) => {
        if(knownspells.length > 0){
            hoverSpells(e);
        }
    });
    playerspells.addEventListener('mouseleave', (e) => {
        if(knownspells.length > 0){
            hideSpells();
        }
    });

    const weaponbtn = document.getElementById("equippedweapon");
    //b
    weaponbtn.addEventListener('click', () => {
        let retval = currBattle.doTurn(hero.weapon);
        logstring = retval.text;
        let outcome = retval.outcome;
        updateUI(outcome);
    });
    

    const form = document.getElementById("initialform");
    document.getElementById("gameplay").style.display = "none";
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        playerName = document.getElementById("nameInput").value;
        const startup = document.getElementById("startup");
        if(startup){
            startup.style.display = 'none';
        };
        
        //TODO: start it up
        document.getElementById("gameplay").style.display = "inline-block";
        document.getElementById("playername").innerHTML = playerName;
        document.getElementById("logwindow").style.display = "block";
        hero = new classes.Hero(playerName);
        updatePlayerUI();        
        //start game loop
        enterMonster(0);
        currBattle = new classes.Battle(hero, monsters[monstersDefeated], monstersDefeated+1);
    });
});

function hoverSpells(e){ //TODO: add useon()
    const tooltip = document.getElementById("spells");
    tooltip.innerHTML = '';
    knownspells.forEach(Element => {
        //create the div
        let newDiv = document.createElement('div');
        newDiv.className = "spellitem";
        newDiv.pageY = 1005;
        //title of spell
        let spellTitle = document.createElement('h2');
        spellTitle.innerHTML = Element.name;
        //damage of spell
        let spellDamage = document.createElement('h3');
        spellDamage.innerHTML = "Damage: "+Element.damage;
        //cost of spell
        let spellCost = document.createElement('h3');
        spellCost.innerHTML = "Cost: "+Element.manaCost;
        //flavor text of spell
        let spellText = document.createElement('p');
        spellText.innerHTML = Element.description;

        newDiv.addEventListener('click', () => {
            turnResult = currBattle.doTurn(Element);
            logstring = turnResult.text;
            updateUI(turnResult.outcome);
        });

        //in the darkness bind them
        tooltip.appendChild(newDiv); 
        newDiv.appendChild(spellTitle);
        newDiv.appendChild(spellDamage);
        newDiv.appendChild(spellCost);
        newDiv.appendChild(spellText);
        // tooltip.addEventListener('click', () => {
        //     //use spell
        //     let retval = Element.useOn(hero, currBattle.monster);
        //     logstring = retval.text;
        //     outcome = retval.outcome;
        //     updateUI(outcome); 
        // });
    });

}

function hideSpells(){
    setTimeout(() => {
        const tooltip = document.getElementById("spells");
        tooltip.innerHTML = '';
        let resetSpellsImg = document.createElement('img');
        resetSpellsImg.src = "./images/spells.jpg";
        resetSpellsImg.className = "equippedweapon";
        resetSpellsImg.id = "spellsimg";
        tooltip.appendChild(resetSpellsImg);
    }, 200);
}

function hoverArmor(e){
    const tooltip = document.getElementById("tooltiparmor");
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX+"px";
    tooltip.style.top = (e.pageY - tooltip.offsetHeight - 5)+"px";
    document.getElementById("armorname").innerHTML = hero.armor.name;
    document.getElementById("armorresistance").innerHTML = "Resistance: "+hero.armor.effectiveness;
}

function hidearmor(){
    const tooltip = document.getElementById("tooltiparmor");
    tooltip.style.display = "none";
}

function hoverWeapon(e){
    const tooltip = document.getElementById("tooltipWeapon");
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX+"px";
    tooltip.style.top = (e.pageY - tooltip.offsetHeight - 5)+"px";
    document.getElementById("weaponname").innerHTML = hero.weapon.name;
    document.getElementById("weapondamage").innerHTML = "Damage: "+hero.weapon.damage;
}

function hideWeapon(){
    const tooltip = document.getElementById("tooltipWeapon");
    tooltip.style.display = "none";
}

function enterMonster(i){
    let arrivalAudio = document.getElementById("monsterarrivalaudio");
    // arrivalAudio.volume = 0.3;
    arrivalAudio.volume = 1;
    arrivalAudio.play();
    let m = monsters[monstersDefeated];
    //set frontend 
    document.getElementById("monsterimg").src = m.url;
    document.getElementById("monsterhealth").innerHTML = "Health: "+m.health;
    document.getElementById("monsterdamage").innerHTML = "Damage: "+m.weapon.damage;
    document.getElementById("monstertitle").innerHTML = m.name;
    updatePlayerUI();
    return m;
}

function diedMonster(){
    let deathAudio = document.getElementById("monsterdeathaudio");
    deathAudio.volume = 0.3;
    deathAudio.play();
    hero.levelUp();
    monstersDefeated++;
    //looting phase
    let lootdrops = monstersDefeated+1;
    for(let i = 0; i<=lootdrops; i++){
        rewardPlayer();
    }
}

function displayLoss(){
    let ls = document.getElementById("lossscreen");
    ls.style.display = "block";
}

function updateUI(outcome=0){
    //add to the event log
    let logbox = document.getElementById('logparagraph');
    logbox.innerHTML += "\n"+logstring;
    logbox.scrolltop = logbox.scrollHeight;
    //update health divs
    //monsterhealth
    document.getElementById("monsterhealth").innerHTML = "Health: "+currBattle.monster.health;
    //playerhealth, playermana
    updatePlayerUI();
    //handle game state
        // 0: keep fighting (nothing)
        // 1: monster died, give loot and start new battle 
    if (outcome==1){
        diedMonster();
        enterMonster(monstersDefeated);
        currBattle = new classes.Battle(hero, monsters[monstersDefeated], monstersDefeated+1);
    }
}

function updatePlayerUI(){
    document.getElementById("playerhealth").innerHTML = "Health: "+hero.health;
    document.getElementById("playermana").innerHTML = "Mana: "+hero.mana;
    //update armor image
    let current_armor = hero.armor;
    document.getElementById("armorimg").src = current_armor.url;
    //update weapon image
    let current_weapon = hero.weapon;
    document.getElementById("weaponimg").src = current_weapon.url;
}

function rewardPlayer(){
    document.getElementById("rewardscreen").style.display = "block";
    let rimg = document.getElementById("rewardimg");
    // let type = randint(0,2);
    let type = 0;
    if (type == 0) {
        //weapon
        //0-5
        let subtype = randint(0,6);
        reward = classes.Weapon.getNumber(subtype);
    } else if (type == 1){
        //armor
        //0-5
        let subtype = randint(0,6);
        reward = classes.Armor.getNumber(subtype);
    } else {
        //spell
        //0-5
        let subtype = randint(0,6);
        reward = classes.Spell.getNumber(subtype);
        }
        rimg.source = reward.url;
    }
}

function randint(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
