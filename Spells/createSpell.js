function fireBolt(hero, enemy){
    console.log(" " + hero.name + " launches a bolt of fire at " + enemy.name + " for 8 points of damage");
    enemy.hitPoints -= 8;
    console.log(" The " + enemy.name + " now has " + enemy.hitPoints + " hit points");
}

function minorHealing(hero){
    var oldValue = hero.hitPoints;
    hero.hitPoints += 6;
    
    if(hero.hitPoints > hero.maxHitPoints){
        hero.hitPoints = hero.maxHitPoints;
    }
    
    var difference = hero.hitPoints - oldValue;
    console.log(" " + hero.name + " feels a surge of energy gaining " + difference + " Hit Points");
}

module.exports = {
    createSpell: function(name, magicPointCost, effect, usableOutOfCombat){
        this.name = name;
        this.magicPointCost = magicPointCost;
        this.effect = effect;
        this.usableOutOfCombat = usableOutOfCombat;
    }
}