document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("initialform");
    document.getElementById("gameplay").style.display = "none";
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const playerNameInput = document.getElementById("nameInput").value;
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
        hoverWeapon();
    });
    playerweapon.addEventListener('mouseleave', (e) => {
        leaveWeapon();
    })
});

function hoverWeapon(){
    const tooltip = document.getElementById("tooltip");
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX+"px";
    tooltip.style.top = (e.pageY - tooltip.offsetHeight - 5)+"px";
}

function hideWeapon(){
    const tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}

function enterMonster(){
    let arrivalAudio = document.getElementById("monsterarrivalaudio");
    arrivalAudio.volume = 0.3;
    arrivalAudio.play();
}

function showrules(){
    document.getElementById("helpinfo").style.display = "block";
}

function hiderules(){
    document.getElementById("helpinfo").style.display = "none";
}

