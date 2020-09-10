var createWeapon = require("./createWeapon.js");

module.exports = {
quarterStaff: new createWeapon.createWeapon("Quarter Staff",1,2,0,true,true,true,true,true),
dagger: new createWeapon.createWeapon("Dagger",1,4,10,true,true,true,true,true),
shortSword: new createWeapon.createWeapon("Short Sword",2,6,20,true,true,false,true,true),
mace: new createWeapon.createWeapon("Mace",2,5,15,true,true,false,true,true),
longSword: new createWeapon.createWeapon("Long Sword",3,8,35,true,false,false,true,true),
battleAxe: new createWeapon.createWeapon("Battle Axe",4,8,45,true,false,false,true,false),
shadowDancersDagger: new createWeapon.createWeapon("Dagger",3,7,450,true,true,true,true,true),
swashbucklersShortSword: new createWeapon.createWeapon("Short Sword",4,9,775,true,true,false,true,true),
crusadersMace: new createWeapon.createWeapon("Mace",4,8,600,true,true,false,true,true),
warlordsLongSword: new createWeapon.createWeapon("Long Sword",6,11,900,true,false,false,true,true),
barbarianChiefsWaraxe: new createWeapon.createWeapon("Battle Axe",7,11,1000,true,false,false,true,false),
none: new createWeapon.createWeapon("None",0,0,0,true,true,true,true,true)
}