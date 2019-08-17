var createSpell = require("./createSpell.js");

var fireBolt = new createSpell.createSpell("Fire Bolt", "Attack", 7, 5, false);
var minorHealing = new createSpell.createSpell("Minor Healing", "Healing", 8, 6, true)

module.exports = {
    fireBolt: new createSpell.createSpell("Fire Bolt", "Attack", 7, 5, false),
    minorHealing: new createSpell.createSpell("Minor Healing", "Healing", 8, 6, true),
    spellArray: [fireBolt, minorHealing]
}