var createMerchant = require("./createMerchant.js");
var weapons = require("../Weapons/weapons.js")
var armors = require("../Armor/armors.js")

var heimdallMessage = " Hello, my name is Heimdall you will need some weapons and" +
" armor to slay the beasts that lie ahead in Nordgar Dungeon.  Please, take some time" +
" to browse my shop.";

var runarMessage = " Hello, my name is Runar you will need some weapons and" +
" armor to slay the beasts that lie ahead in Nordgar Dungeon.  Please, take some time" +
" to browse my shop.";

var solveigMessage = " Hello, my name is Solveig you will need some weapons and" +
" armor to slay the beasts that lie ahead in Nordgar Dungeon.  Please, take some time" +
" to browse my shop.";

var ragnheidrMessage = " Hello, my name is Ragnheidr you will need some weapons and" +
" armor to slay the beasts that lie ahead in Nordgar Dungeon.  Please, take some time" +
" to browse my shop.";

var snorriMessage = " Hello, my name is Snorri you will need some weapons and" +
" armor to slay the beasts that lie ahead in Nordgar Dungeon.  Please, take some time" +
" to browse my shop.";

var njordMessage = " Hello, my name is Njord you will need some weapons and" +
" armor to slay the beasts that lie ahead in Nordgar Dungeon.  Please, take some time" +
" to browse my shop.";

module.exports = {
    heimdall: new createMerchant.createMerchant("Heimdall", heimdallMessage, 
    [weapons.quarterStaff, weapons.dagger, weapons.shortSword, weapons.mace, weapons.longSword,
    weapons.battleAxe, armors.leatherArmor, armors.chainMail, armors.plateMail, "Thieves' Tools", "Camping Supplies", "Healing Potion", "Mana Potion", "Antidote"], 6),

    runar: new createMerchant.createMerchant("Runar", runarMessage, 
    [weapons.quarterStaff, weapons.dagger, weapons.shortSword, weapons.mace, weapons.longSword,
    weapons.battleAxe, armors.leatherArmor, armors.chainMail, armors.plateMail, "Thieves' Tools", "Camping Supplies", "Healing Potion", "Mana Potion", "Antidote"], 6),

    solveig: new createMerchant.createMerchant("Solveig", solveigMessage, 
    [weapons.quarterStaff, weapons.dagger, weapons.shortSword, weapons.mace, weapons.longSword,
    weapons.battleAxe, armors.leatherArmor, armors.chainMail, armors.plateMail, "Thieves' Tools", "Camping Supplies", "Healing Potion", "Mana Potion", "Antidote"], 6),

    ragnheidr: new createMerchant.createMerchant("Ragnheidr", ragnheidrMessage, 
    [weapons.quarterStaff, weapons.dagger, weapons.shortSword, weapons.mace, weapons.longSword,
    weapons.battleAxe, armors.leatherArmor, armors.chainMail, armors.plateMail, "Thieves' Tools", "Camping Supplies", "Healing Potion", "Mana Potion", "Antidote"], 6),

    snorri: new createMerchant.createMerchant("Snorri", snorriMessage, 
    [weapons.quarterStaff, weapons.dagger, weapons.shortSword, weapons.mace, weapons.longSword,
    weapons.battleAxe, armors.leatherArmor, armors.chainMail, armors.plateMail, "Thieves' Tools", "Camping Supplies", "Healing Potion", "Mana Potion", "Antidote"], 6),

    njord: new createMerchant.createMerchant("Njord", njordMessage, 
        [weapons.quarterStaff, weapons.dagger, weapons.shortSword, weapons.mace, weapons.longSword,
        weapons.battleAxe, armors.leatherArmor, armors.chainMail, armors.plateMail, "Thieves' Tools", "Camping Supplies" , "Healing Potion", "Mana Potion", "Antidote"], 6),
}