var monsters = require("./monsters.js");

module.exports = {
    generateRandomMonster: function(){
        var randomMonsterRoll = Math.round((Math.random() * 100) + 1);
        console.log(" The game master has rolled a " + randomMonsterRoll);

        if(randomMonsterRoll <= 15){
            return monsters.greenSlime
        }

        else if(randomMonsterRoll <= 30){
            return monsters.ratMan
        }

        else if(randomMonsterRoll <= 45){
            return monsters.goblin
        }

        else if(randomMonsterRoll <= 60){
            return monsters.skeleton
        }

        else if(randomMonsterRoll <= 75){
            return monsters.zombie
        }

        else if(randomMonsterRoll <= 90){
            return monsters.orc
        }

        else if(randomMonsterRoll <= 100){
            return monsters.bandit
        }

        else{
            var errorString = "Something has gone wrong generating a monster.";
            return errorString;
        }
    }
}