var inquirer = require("inquirer");

function heroTurn(hero, monster){
    inquirer
     .prompt([
         {
             type: "list",
             name: "action",
             message: "What would you like to do?",
             choices: ["Attack"]
         }
     ]).then(function(answers) {
         if(answers.action === "Attack"){
            var isHit = hero.attack(monster)

            if(isHit === true){
                console.log(" " + hero.name + "'s attack hit");
                var rawDamage = hero.dealDamage();
                console.log(" the raw damage is " + rawDamage);
                var reduction = monster.reduceDamage();
                console.log(" The " + monster.name + "'s armor reduced the damage by " + reduction);
                var damageThisTurn = rawDamage - reduction;
                console.log(" The " + monster.name + " takes a total of " + damageThisTurn + " damage");
        
                if(damageThisTurn >= 1){
                    monster.takeDamage(damageThisTurn);
                    console.log(" The " + monster.name + " has " + monster.hitPoints + " Hit Points left.");
                    var checkLife = monster.isAlive();
        
                    if(checkLife === true){
                        console.log("");
                        monsterTurn(hero, monster);
                    }
        
                    else{
                        console.log(" The " + monster.name + " has been slain");
                        console.log("");
                        console.log(" " + hero.name + " has gained " + monster.xp + " Experience Points.");
                        hero.xp += monster.xp;
                        console.log(" " + hero.name + " now has " + hero.xp + " Experience Points.");
                        console.log("");

                        var gold = Math.round(monster.generateRandomGold());
                        console.log(" " + hero.name + " has gained " + gold + " gold.");
                        hero.gold += gold;
                        console.log(" " + hero.name + " now has " + hero.gold + " gold.");
                    }
                }
        
                else{
                    console.log(" " + hero.name + " has negated the attack.");
                    console.log("");
                    monsterTurn(hero, monster);
                }
            }
        
            else{
                console.log(" " + hero.name + "'s attack missed");
                console.log("");
                monsterTurn(hero, monster);
            }
         }
     })
}

function monsterTurn(hero,monster){
    var isHit = monster.attack(hero);

    if(isHit === true){
        console.log(" The " + monster.name + "'s attack hit");
        var rawDamage = monster.dealDamage();
        console.log(" the raw damage is " + rawDamage);
        var reduction = hero.reduceDamage();
        console.log(" " + hero.name + "'s armor reduced the damage by " + reduction);
        var damageThisTurn = (rawDamage - reduction);
        console.log(" " + hero.name + " takes a total of " + damageThisTurn + " damage");

        if(damageThisTurn >= 1){
            hero.takeDamage(damageThisTurn);
            console.log(" " + hero.name + " has " + hero.hitPoints + " Hit Points left.");
            var checkLife = hero.isAlive();

            if(checkLife === true){
                console.log("");
                heroTurn(hero, monster);
            }

            else{
                console.log(" " + hero.name + " has been slain.")
                console.log("Game over.");
            }
        }

        else{
            console.log(" The " + monster.name + " has negated the attack.");
            console.log("");
            heroTurn(hero, monster);
        }
    }

    else{
        console.log(" The " + monster.name + "'s attack missed.");
        console.log("");
        heroTurn(hero, monster);
    }
}

module.exports = {
    displayBattle: function(hero, monster){
        console.log("");
        console.log(" In the next room you encounter a " + monster.name);
        console.log(" " + hero.name + " Prepare for battle");
        console.log("");

        var heroSpeedRoll = Math.round((Math.random() * 12) + 1) + hero.agility;
        console.log(" " + hero.name + " rolled a " + heroSpeedRoll + " to strike first");
        var monsterSpeedRoll = Math.round((Math.random() * 12) + 1) + monster.agility;
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