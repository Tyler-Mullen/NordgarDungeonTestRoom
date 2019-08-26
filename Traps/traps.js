var createTrap = require("./createTrap.js");

module.exports = {
    poisonArrowTrap = new createTrap.createTrap("Poison Arrow Trap",8,6,3,32,12),
    spearTrap = new createTrap.createTrap("Spear Trap",8,7,4,32,14),
    flameJetTrap = new createTrap.createTrap("Flame Jet Trap",10,10,10,40,20),
    sawBladeTrap = new createTrap.createTrap("Saw Blade Trap",12,9,8,36,16)
}