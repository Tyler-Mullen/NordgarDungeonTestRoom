var inquirer = require("inquirer");

function heroTurn(){

}

function monsterTurn(){

}

module.exports = {
    displayBattle: function(hero, monster){
        console.log("");
        console.log("In the next room you encounter a " + monster.name);
        console.log(hero.name + " Prepare for battle");

        var heroSpeedRoll = parseInt((Math.random() * 12) + 1) + hero.agility;
        console.log(hero.name + " rolled a " + heroSpeedRoll);
        var monsterSpeedRoll = parseInt((Math.random() * 12) + 1) + monster.agility;
        console.log(monster.name + " rolled a " + monsterSpeedRoll);

        if(heroSpeedRoll >= monsterSpeedRoll){
            heroTurn();
        }

        else{
            monsterTurn();
        }
    }
}