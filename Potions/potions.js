var createPotion = require("./createPotion.js");

module.exports = {
    healingPotion: new createPotion.createPotion("Healing Potion", 10, hero.hp += 25)
}