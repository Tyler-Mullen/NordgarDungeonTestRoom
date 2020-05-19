var monsters = require("./monsters.js");

module.exports = {
    generateRandomMonster: function(level){

        switch(level){
            case 1:
                var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
                console.log(" The game master has rolled a " + randomMonsterRoll);

                if(randomMonsterRoll < 16){
                    return monsters.greenSlime;
                }

                else if(randomMonsterRoll < 31){
                    return monsters.ratMan;
                }

                else if(randomMonsterRoll < 46){
                    return monsters.goblin;
                }

                else if(randomMonsterRoll < 61){
                    return monsters.skeleton;
                }

                else if(randomMonsterRoll < 71){
                    return monsters.blueSlime;
                }

                else if(randomMonsterRoll < 81){
                    return monsters.giantCentipede;
                }

                else if(randomMonsterRoll < 91){
                    return monsters.giantSpider;
                }

                else {
                    return monsters.zombie;
                }

                break;

            case 2:
                var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
                console.log(" The game master has rolled a " + randomMonsterRoll);

                if(randomMonsterRoll < 16){
                    return monsters.goblin;
                }

                else if(randomMonsterRoll < 31){
                    return monsters.direWolf;
                }

                else if(randomMonsterRoll < 46){
                    return monsters.bandit;
                }

                else if(randomMonsterRoll < 61){
                    return monsters.orc;
                }

                else if(randomMonsterRoll < 71){
                    return monsters.skeleton;
                }

                else if(randomMonsterRoll < 81){
                    return monsters.ghoul;
                }

                else if(randomMonsterRoll < 91){
                    return monsters.lizardMan;
                }

                else {
                    return monsters.giantSpider;
                }
                break;

            case 3:
                var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
                console.log(" The game master has rolled a " + randomMonsterRoll);

                if(randomMonsterRoll < 16){
                    return monsters.bandit;
                }

                else if(randomMonsterRoll < 31){
                    return monsters.orc;
                }

                else if(randomMonsterRoll < 46){
                    return monsters.barbarian;
                }

                else if(randomMonsterRoll < 61){
                    return monsters.gnoll;
                }

                else if(randomMonsterRoll < 71){
                    return monsters.darkElf;
                }

                else if(randomMonsterRoll < 81){
                    return monsters.direWolf;
                }

                else if(randomMonsterRoll < 91){
                    return monsters.airElemental;
                }

                else {
                    return monsters.fireElemental;
                }
                break;

            case 4: 
            var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
            console.log(" The game master has rolled a " + randomMonsterRoll);

            if(randomMonsterRoll < 16){
                return monsters.orc;
            }

            else if(randomMonsterRoll < 31){
                return monsters.darkElf;
            }

            else if(randomMonsterRoll < 46){
                return monsters.barbarian;
            }

            else if(randomMonsterRoll < 61){
                return monsters.bugbear;
            }

            else if(randomMonsterRoll < 71){
                return monsters.gnoll;
            }

            else if(randomMonsterRoll < 81){
                return monsters.hellHound;
            }

            else if(randomMonsterRoll < 91){
                return monsters.fireElemental;
            }

            else {
                return monsters.waterElemental;
            }
            break;

            case 5:
                var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
                console.log(" The game master has rolled a " + randomMonsterRoll);

                if(randomMonsterRoll < 16){
                    return monsters.darkElf;
                }

                else if(randomMonsterRoll < 31){
                    return monsters.barbarian;
                }

                else if(randomMonsterRoll < 46){
                    return monsters.bugbear;
                }

                else if(randomMonsterRoll < 61){
                    return monsters.ogre;
                }

                else if(randomMonsterRoll < 71){
                    return monsters.hellHound;
                }

                else if(randomMonsterRoll < 81){
                    return monsters.mummy;
                }

                else if(randomMonsterRoll < 91){
                    return monsters.werewolf;
                }

                else {
                    return monsters.gargoyle;
                }
                break;

            case 6:
                var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
                console.log(" The game master has rolled a " + randomMonsterRoll);

                if(randomMonsterRoll < 16){
                    return monsters.barbarian;
                }

                else if(randomMonsterRoll < 31){
                    return monsters.bugbear;
                }

                else if(randomMonsterRoll < 46){
                    return monsters.ogre;
                }

                else if(randomMonsterRoll < 61){
                    return monsters.troll;
                }

                else if(randomMonsterRoll < 71){
                    return monsters.waterElemental;
                }

                else if(randomMonsterRoll < 81){
                    return monsters.earthElemental;
                }

                else if(randomMonsterRoll < 91){
                    return monsters.mummy;
                }

                else {
                    return monsters.werewolf;
                }
                break;

            case 7:
                var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
                console.log(" The game master has rolled a " + randomMonsterRoll);

                if(randomMonsterRoll < 16){
                    return monsters.earthElemental;
                }

                else if(randomMonsterRoll < 31){
                    return monsters.ogre;
                }

                else if(randomMonsterRoll < 46){
                    return monsters.troll;
                }

                else if(randomMonsterRoll < 61){
                    return monsters.gargoyle;
                }

                else if(randomMonsterRoll < 71){
                    return monsters.mummy;
                }

                else if(randomMonsterRoll < 81){
                    return monsters.werewolf;
                }

                else if(randomMonsterRoll < 91){
                    return monsters.vampire;
                }

                else {
                    return monsters.waterElemental;
                }
                break;

            case 8:
                var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
                console.log(" The game master has rolled a " + randomMonsterRoll);

                if(randomMonsterRoll < 16){
                    return monsters.earthElemental;
                }

                else if(randomMonsterRoll < 31){
                    return monsters.ogre;
                }

                else if(randomMonsterRoll < 46){
                    return monsters.troll;
                }

                else if(randomMonsterRoll < 61){
                    return monsters.hillGiant;
                }

                else if(randomMonsterRoll < 71){
                    return monsters.mummy;
                }

                else if(randomMonsterRoll < 81){
                    return monsters.werewolf;
                }

                else if(randomMonsterRoll < 91){
                    return monsters.gargoyle;
                }

                else {
                    return monsters.vampire;
                }
                break;

            case 9:
                var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
                console.log(" The game master has rolled a " + randomMonsterRoll);

                if(randomMonsterRoll < 21){
                    return monsters.ogre;
                }

                else if(randomMonsterRoll < 41){
                    return monsters.troll;
                }

                else if(randomMonsterRoll < 61){
                    return monsters.hillGiant;
                }

                else if(randomMonsterRoll < 71){
                    return monsters.minotaur;
                }

                else if(randomMonsterRoll < 81){
                    return monsters.werewolf;
                }

                else if(randomMonsterRoll < 91){
                    return monsters.gargoyle;
                }

                else {
                    return monsters.vampire;
                }
                break;

            case 10:
                var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
                console.log(" The game master has rolled a " + randomMonsterRoll);

               if(randomMonsterRoll < 21){
                   return monsters.ogre;
               }

               else if (randomMonsterRoll < 41){
                return monsters.vampire;
               }

               else if (randomMonsterRoll < 61){
                   return monsters.troll;
                }

                else if (randomMonsterRoll < 81){
                    return monsters.hillGiant;
                }

                else {
                    return monsters.minotaur;
                }
                break;

            default:
                console.log("something has gone wrong generating a monster");
        }
    }
}