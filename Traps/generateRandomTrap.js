var traps = require("./traps.js");

module.exports = {
    generateRandomTrap: function(){
        var randomTrapRoll = Math.round((Math.random() * 100) + 1);
        console.log("The game master has rolled a " + randomTrapRoll);

        if(randomTrapRoll <= 40){
            return traps.poisonArrowTrap
        }

        else if(randomTrapRoll <= 80){
            return traps.spearTrap
        }

        else if(randomTrapRoll <= 90){
            return traps.flameJetTrap
        }

        else if(randomTrapRoll <= 100){
            return traps.sawBladeTrap
        }

        else{
            var errorString = "Something has gone wrong generating a Trap.";
            return errorString;
        }
    }
}