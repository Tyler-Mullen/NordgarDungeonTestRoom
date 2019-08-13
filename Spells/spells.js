var createSpell = require("./createSpell.js");

module.exports = {
    fireBolt: new createSpell.createSpell("Fire Bolt", 5, createSpell.fireBolt(hero, enemy), false),
    minorHealing: new createSpell.createSpell("Minor Healing", 7, createSpell.minorHealing(hero), true)
}