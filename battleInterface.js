var inquirer = require("inquirer");

function heroTurn(hero, monster){
    hero.attack(monster)
}

function monsterTurn(hero,monster){
    monster.attack(hero)
}

module.exports = {
    displayBattle: function(hero, monster){
        console.log("");
        console.log(" In the next room you encounter a " + monster.name);
        console.log(" " + hero.name + " Prepare for battle");
        console.log("");

        var heroSpeedRoll = parseInt((Math.random() * 12) + 1) + hero.agility;
        console.log(" " + hero.name + " rolled a " + heroSpeedRoll + " to strike first");
        var monsterSpeedRoll = parseInt((Math.random() * 12) + 1) + monster.agility;
        console.log(" The " + monster.name + " rolled a " + monsterSpeedRoll + " to strike first");
        console.log("");

        if(heroSpeedRoll >= monsterSpeedRoll){
            heroTurn(hero, monster);
        }

        else{
            monsterTurn(hero, monster);
        }
    }
}