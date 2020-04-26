var createMonster = require("./createMonster.js")

module.exports = {
    bandit: new createMonster.createMonster("Bandit",7,9,7,7,0.2,6,20,18),
    barbarian: new createMonster.createMonster("Barbarian",10,7,5,6,0.2,3,25,26),
    darkElf: new createMonster.createMonster("Dark Elf",6,8,9,8,0.2,8,25,21),
    direWolf: new createMonster.createMonster("Dire Wolf",8,8,2,2,0,0,0,21),
    ghoul: new createMonster.createMonster("Ghoul",7,4,6,1,0,0,0,24),
    gnoll: new createMonster.createMonster("Gnoll",8,7,4,3,0.2,7,19,25),
    goblin: new createMonster.createMonster("Goblin",3,6,3,2,0.1,3,9,14),
    greenSlime: new createMonster.createMonster("Green Slime",2,2,1,1,0,0,0,10),
    lizardMan: new createMonster.createMonster("Lizardman",7,7,5,2,0.2,5,17,21),
    ogre: new createMonster.createMonster("Ogre",16,6,3,2,0.3,26,40,42),
    orc: new createMonster.createMonster("Orc",9,6,3,3,0.2,5,18,22),
    ratMan: new createMonster.createMonster("Ratman",3,7,4,2,0,3,7,12),
    skeleton: new createMonster.createMonster("Skeleton",4,4,6,1,0,0,0,18),
    troll: new createMonster.createMonster("Troll",20,6,4,2,0.3,40,60,50),
    zombie: new createMonster.createMonster("Zombie",6,2,4,1,0,0,0,21),
}