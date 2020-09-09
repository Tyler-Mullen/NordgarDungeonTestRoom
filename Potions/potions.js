var createPotion = require("./createPotion.js");

module.exports = {
    healingPotion: new createPotion.createPotion("Healing Potion", 15, "Healing", 10),
    manaPotion: new createPotion.createPotion("Mana Potion", 20, "Mana Restore", 10),
    antidote: new createPotion.createPotion("Antidote", 20, "Antidote", 0)
}