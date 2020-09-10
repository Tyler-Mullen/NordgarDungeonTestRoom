var createSpell = require("./createSpell.js");

var fireBolt = new createSpell.createSpell("Fire Bolt", "Attack", 7, 5, false);
var minorHealing = new createSpell.createSpell("Minor Healing", "Healing", 8, 6, true);
var iceLance = new createSpell.createSpell("Ice Lance", "Attack", 14, 10, false);
var vanish = new createSpell.createSpell("Vanish", "Disappear", 0, 3, false);
var haste = new createSpell.createSpell("Haste", "Quickness Buff", 5, 7, false);
var blind = new createSpell.createSpell("Blind", "Blindness", 3, 6, false);
var deathRay = new createSpell.createSpell("Death Ray", "Instant Death", 0, 13, false);
var greaterHealing = new createSpell.createSpell("Greater Healing", "Healing", 16, 12, true);
var stoneSkin = new createSpell.createSpell("Stone Skin", "Barrier", 12, 9, true);
var curePoison = new createSpell.createSpell("Cure Poison", "Cure Ailment", 0, 4, true);

module.exports = {
    fireBolt: new createSpell.createSpell("Fire Bolt", "Attack", 7, 5, false),
    minorHealing: new createSpell.createSpell("Minor Healing", "Healing", 8, 6, true),
    iceLance: new createSpell.createSpell("Ice Lance", "Attack", 14, 10, false),
    vanish: new createSpell.createSpell("Vanish", "Disappear", 0, 3, false),
    haste: new createSpell.createSpell("Haste", "Quickness Buff", 5, 7, false),
    blind: new createSpell.createSpell("Blind", "Blindness", 3, 6, false),
    deathRay: new createSpell.createSpell("Death Ray", "Instant Death", 0, 13, false),
    greaterHealing: new createSpell.createSpell("Greater Healing", "Healing", 16, 12, true),
    stoneSkin: new createSpell.createSpell("Stone Skin", "Barrier", 12, 9, true),
    curePoison: new createSpell.createSpell("Cure Poison", "Cure Ailment", 0, 4, true),
    spellArray: [fireBolt, minorHealing, iceLance, vanish, haste, blind, deathRay, greaterHealing, stoneSkin, curePoison]
}