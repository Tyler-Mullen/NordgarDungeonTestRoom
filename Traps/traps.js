var createTrap = require("./createTrap.js");

module.exports = {
    poisonArrowTrap: new createTrap.createTrap("Poison Arrow Trap",15,13,3,32,12),
    spearTrap: new createTrap.createTrap("Spear Trap",15,14,4,32,14),
    flameJetTrap: new createTrap.createTrap("Flame Jet Trap",17,17,10,40,20),
    sawBladeTrap: new createTrap.createTrap("Saw Blade Trap",19,16,8,36,16)
}