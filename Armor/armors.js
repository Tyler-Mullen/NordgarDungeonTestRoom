var createArmor = require("./createArmor.js")

module.exports = {
leatherArmor: new createArmor.createArmor("Leather Armor",0.2,25,true,true,false,true,true),
chainMail: new createArmor.createArmor("Chain Mail",0.4,50,true,false,false,true,true),
plateMail: new createArmor.createArmor("Plate Mail",0.6,85,true,false,false,true,false),
studdedLeather: new createArmor.createArmor("Studded Leather",0.3,450,true,true,false,true,true),
dragonScaleMail: new createArmor.createArmor("Dragon Scale Mail",0.5,600,true,false,false,true,true),
fullPlate: new createArmor.createArmor("Full Plate",0.7,1200,true,false,false,true,false),
none: new createArmor.createArmor("None",0,0,0,true,true,true,true,true)
}