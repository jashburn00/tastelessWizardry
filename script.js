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

    const form = document.getElementById("initialform");
    document.getElementById("gameplay").style.display = "none";
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        playerName = document.getElementById("nameInput").value;
        const startup = document.getElementById("startup");
        if(startup){
            startup.style.display = 'none';
        }
        
        //TODO: start it up
        document.getElementById("gameplay").style.display = "inline-block";
        document.getElementById("playername").innerHTML = playerName;
        hero = new classes.Hero(playerName);
        //start game loop
        for(let i = 0; i<monsters.length; i++){
            let m = enterMonster(i);
            document.getElementById("monsterimg").style.src = m.url;
            document.getElementById("monsterhealth").innerHTML = "Health: "+m.health;
            document.getElementById("monsterdamage").innerHTML = "Damage: "+m.weapon.damage;
            //TODO: game logic
        }
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

        //in the darkness bind them
        tooltip.appendChild(newDiv); 
        newDiv.appendChild(spellTitle);
        newDiv.appendChild(spellDamage);
        newDiv.appendChild(spellCost);
        newDiv.appendChild(spellText);
        tooltip.addEventListener('click', () => {
            //use spell
        });
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
}

function hideWeapon(){
    const tooltip = document.getElementById("tooltipWeapon");
    tooltip.style.display = "none";
}

function enterMonster(i){
    let arrivalAudio = document.getElementById("monsterarrivalaudio");
    arrivalAudio.volume = 0.3;
    arrivalAudio.play();
    let m = classes.Entity.getNumber(i);
    //set frontend 
    document.getElementById("monsterimg").style.src = m.url;
    document.getElementById("monsterhealth").innerHTML = "Health: "+m.health;
    document.getElementById("monsterdamage").innerHTML = "Damage: "+m.weapon.damage;
    return m;
}

function diedMonster(m, h){
    let deathAudio = document.getElementById("monsterdeathaudio");
    deathAudio.volume = 0.3;
    deathAudio.play();
    h.levelUp();
    generate
}

function displayLoss(){
    let ls = document.getElementById("lossscreen");
    ls.style.display = "block";
}



