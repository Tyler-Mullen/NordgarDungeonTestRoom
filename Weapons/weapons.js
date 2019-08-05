var createWeapon = require("./createWeapon.js");

module.exports = {
quarterStaff: new createWeapon.createWeapon("Quarter Staff",1,2,0,true,true,true,true,true),
dagger: new createWeapon.createWeapon("Dagger",1,4,10,true,true,true,true,true),
shortSword: new createWeapon.createWeapon("Short Sword",2,6,20,true,true,false,true,true),
mace: new createWeapon.createWeapon("Mace",2,5,15,true,true,false,true,true),
longSword: new createWeapon.createWeapon("Long Sword",3,8,35,true,false,false,true,true),
battleAxe: new createWeapon.createWeapon("Battle Axe",4,8,45,true,false,false,true,false)
}