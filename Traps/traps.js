var createTrap = require("./createTrap.js");

module.exports = {
    poisonArrowTrap: new createTrap.createTrap("Poison Arrow Trap",13,3,12),
    spearTrap: new createTrap.createTrap("Spear Trap",14,4,14),
    flameJetTrap: new createTrap.createTrap("Flame Jet Trap",17,10,20),
    sawBladeTrap: new createTrap.createTrap("Saw Blade Trap",16,8,16)
}