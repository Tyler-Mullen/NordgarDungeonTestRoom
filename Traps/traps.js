var createTrap = require("./createTrap.js");

module.exports = {
    poisonArrowTrap: new createTrap.createTrap("Poison Arrow Trap",13,3,12,true),
    spearTrap: new createTrap.createTrap("Spear Trap",14,4,14,false),
    flameJetTrap: new createTrap.createTrap("Flame Jet Trap",17,10,20,false),
    sawBladeTrap: new createTrap.createTrap("Saw Blade Trap",16,8,16,false)
}