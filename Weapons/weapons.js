var createWeapon = require("./createWeapon.js");

var quarterStaff = new createWeapon.createWeapon(1,2,0,true,true,true,true,true);
var dagger = new createWeapon.createWeapon(1,4,10,true,true,true,true,true);
var shortSword = new createWeapon.createWeapon(2,6,20,true,true,false,true,true);
var longSword = new createWeapon.createWeapon(3,8,35,true,false,false,true,true);
var battleAxe = new createWeapon.createWeapon(4,8,45,true,false,false,true,false);
var greatSword = new createWeapon.createWeapon(6,10,60,true,false,false,true,false);