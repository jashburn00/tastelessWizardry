import { Weapon } from './scripts/Weapon.js';
let knownspells = new Array();
let playerName = "";


document.addEventListener('DOMContentLoaded', () => {
    const helpbutton = document.getElementById("helpbutton");
    helpbutton.addEventListener('click', () => {
        document.getElementById("helpinfo").style.display = "block";
    });

    const OKbutton = document.getElementById("OKbutton");
    OKbutton.addEventListener('click', () => {
        document.getElementById("helpinfo").style.display = "none";
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
        
        //TODO: start this bitch up
        document.getElementById("gameplay").style.display = "inline-block";
        enterMonster();
    });
    const playerweapon = document.getElementById("equippedweapon");
    playerweapon.addEventListener('mousemove', (e) => {
        hoverWeapon(e);
    });
    playerweapon.addEventListener('mouseleave', (e) => {
        hideWeapon();
    });
    
    const playerspells = document.getElementById("spells");
    playerspells.addEventListener('mousemove', (e) => {
        hoverSpells(e);
    });
    playerspells.addEventListener('mouseleave', (e) => {
        hideSpells();
    });
});

function showrules(){
    document.getElementById("helpinfo").style.display = "block";
}

function hiderules(){
    document.getElementById("helpinfo").style.display = "none";
}

function hoverSpells(e){
    const tooltip = document.getElementById("tooltipSpells");
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
        spellCost.innerHTML = "Cost: "+Element.cost;
        //flavor text of spell
        let spellText = document.createElement('p');
        spellText.innerHTML = Element.description;

        //in the darkness bind them
        tooltip.appendChild(newDiv);
        newDiv.appendChild(spellTitle);
        newDiv.appendChild(spellDamage);
        newDiv.appendChild(spellCost);
        newDiv.appendChild(spellText);
    });

}

function hideSpells(){
    const tooltip = document.getElementById("spells");
    tooltip.innerHTML = '';
    let resetSpellsImg = document.createElement('img');
    resetSpellsImg.src = "./images/spells.jpg";
    resetSpellsImg.className = "equippedweapon";
    resetSpellsImg.id = "spellsimg";
    tooltip.appendChild(resetSpellsImg);
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

function enterMonster(){
    let arrivalAudio = document.getElementById("monsterarrivalaudio");
    arrivalAudio.volume = 0.3;
    arrivalAudio.play();
}



