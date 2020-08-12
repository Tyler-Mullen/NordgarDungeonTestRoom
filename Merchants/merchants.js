var createMerchant = require("./createMerchant.js");
var weapons = require("../Weapons/weapons.js")
var armors = require("../Armor/armors.js")

var firstMerchantMessage = " Hello, my name is Heimdall you will need some weapons and" +
" armor to slay the beasts that lie ahead in Nordgar Dungeon.  Please, take some time" +
" to browse my shop.";

module.exports = {
    firstMerchant: new createMerchant.createFirstMerchant("Heimdall", firstMerchantMessage, 
    [weapons.quarterStaff, weapons.dagger, weapons.shortSword, weapons.mace, weapons.longSword,
    weapons.battleAxe, armors.leatherArmor, armors.chainMail, armors.plateMail, "Thieves' Tools", "Camping Supplies"])
}