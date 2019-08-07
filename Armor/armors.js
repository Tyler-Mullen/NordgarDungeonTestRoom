var createArmor = require("./createArmor.js")

module.exports = {
leatherArmor: new createArmor.createArmor("Leather Armor",0,2,25,true,true,false,true,true),
chainMail: new createArmor.createArmor("Chain Mail",1,4,50,true,false,false,true,true),
plateMail: new createArmor.createArmor("Plate Mail",3,6,85,true,false,false,true,false),
none: new createArmor.createArmor("None",0,0,0,true,true,true,true,true)
}