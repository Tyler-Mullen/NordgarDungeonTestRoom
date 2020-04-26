var inquirer = require("inquirer");
var generateRandomMonster = require("./monsters/generateRandomMonster.js");
var generateRandomTrap = require("./traps/generateRandomTrap.js");
var spells = require("./spells/spells.js");

function getCombatChoices(profession){
    switch(profession){
        case "Warrior":
            return ["Attack", "Flee"]

        case "Thief":
            return ["Attack", "Flee"]

        case "Mage":
            return ["Attack", "Cast a Spell", "Flee"]

        case "Paladin":
            return ["Attack", "Cast a Spell", "Flee"]

        case "Bard":
            return ["Attack", "Cast a Spell", "Flee"]

        default:
            return "Something has gone wrong selecting the combat choices";
    }
}

function getNonCombatChoices(profession){
    switch(profession){
        case "Warrior":
            return ["Venture Forward", "Rest", "Print Stats", "Exit"]
        
        case "Thief":
            return ["Venture Forward", "Rest", "Print Stats", "Exit"]

        case "Mage":
            return ["Venture Forward", "Cast a Spell", "Rest", "Print Stats", "Exit"]

        case "Paladin":
            return ["Venture Forward", "Cast a Spell", "Rest", "Print Stats", "Exit"]

        case "Bard":
            return ["Venture Forward", "Rest", "Print Stats", "Exit"]

        default:
            return "Something has gone wrong selecting the combat choices";
    }
}

function displayBattle(hero, monster){
    monster.hitPoints = monster.maxHitPoints;
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

function displayTrap(hero, trap){
    console.log("Have you encountered a " + trap.type);

    if(hero.profession === "Thief"){
    inquirer
     .prompt([
         {
             type: "list",
             name: "action",
             message: "What would you like to do?",
             choices: ["Disarm the trap","Dodge the trap"]
         }
        ])
        .then(function (answers){
            console.log(answers.action);
            if(answers.action === "Disarm the trap"){
                var disarmRoll = Math.round(Math.random()*12 + (hero.agility + 1));

                console.log("You have rolled a " + disarmRoll + " to disarm the trap"); 

                if(disarmRoll >= trap.disarmDifficulty){
                    console.log("You have successfully disarmed the trap");
                    hero.xp += trap.disarmXp;
                    console.log(hero.name + " has gained " + trap.disarmXp + " XP");
                    console.log(hero.name + " now has " + hero.xp + " xp");
                    console.log();
                    promptVentureForward(hero);
                }

                else{
                    console.log("You failed to disarm the trap");
                    console.log(hero.name + " takes " + trap.damage + " points of damage");
                    hero.hitPoints -= trap.damage;
                    console.log(hero.name + " has " + hero.hitPoints + " HP left");
    
                    var checkLife = hero.isAlive();
    
                    if(checkLife === true){
                        console.log();
                        promptVentureForward(hero);
                    }
    
                    else {
                        console.log(hero.name + " has been slain.")
                        console.log("Game over.");
                    }   
                }
            }

            else if(answers.action === "Dodge the trap"){
                var dodgeRoll = Math.round(Math.random()*12 + (hero.agility + 1));

                console.log("You have rolled a " + dodgeRoll + " to avoid the trap");        

                if(dodgeRoll >= trap.dodgeDifficulty){
                    console.log("You have successfully dodged the trap");
                    hero.xp += trap.dodgeXp;
                    console.log(hero.name + " has gained " + trap.dodgeXp + " XP");
                    console.log(hero.name + " now has " + hero.xp + " xp");
                    console.log();
                    promptVentureForward(hero);
                }
    
                else{
                    console.log("You failed to dodge the trap");
                    console.log(hero.name + " takes " + trap.damage + " points of damage");
                    hero.hitPoints -= trap.damage;
                    console.log(hero.name + " has " + hero.hitPoints + " HP left");
    
                    var checkLife = hero.isAlive();
    
                    if(checkLife === true){
                        console.log();
                        promptVentureForward(hero);
                    }
    
                    else {
                        console.log(hero.name + " has been slain.")
                        console.log("Game over.");
                    }   
                }
            }

            else {
                console.log("Something has gone wrong.");
            }
        })
    }

    else {
        var dodgeRoll = Math.round(Math.random()*12 + (hero.agility + 1));
        console.log("You have rolled a " + dodgeRoll + " to avoid the trap");        

        if(dodgeRoll >= trap.dodgeDifficulty){
            console.log("You have successfully dodged the trap");
            hero.xp += trap.dodgeXp;
            console.log(hero.name + " has gained " + trap.dodgeXp + " XP");
            console.log(hero.name + " now has " + hero.xp + " xp");
            console.log();
            promptVentureForward(hero);
        }
    
        else{
            console.log("You failed to dodge the trap");
            console.log(hero.name + " takes " + trap.damage + " points of damage");
            hero.hitPoints -= trap.damage;
            console.log(hero.name + " has " + hero.hitPoints + " HP left");
    
            var checkLife = hero.isAlive();
    
            if(checkLife === true){
                console.log();
                promptVentureForward(hero);
            }
    
            else {
                console.log(hero.name + " has been slain.")
                console.log("Game over.");
            }
        }
    }
}

function promptVentureForward(hero){

    inquirer
     .prompt([
         {
             type: "list",
             name: "action",
             message: "What would you like to do next",
             choices: ["Venture Forward", "Rest", "Print Stats", "Exit"]
         }
     ]).then(function(answers){
         if(answers.action === "Venture Forward"){
            var roll = Math.round(Math.random()*100 + 1);
            console.log("The game master rolled a " + roll);

            if(roll >= 1){
            var randomTrap = new generateRandomTrap.generateRandomTrap();
            displayTrap(hero, randomTrap);
            }

            else {
            var randomMonster = new generateRandomMonster.generateRandomMonster();
            displayBattle(hero, randomMonster);
            }
         }

         else if(answers.action === "Rest"){
             console.log(" You set up camp for the night. ");
             console.log("");
             var randomRoll = Math.round((Math.random() * 100) + 1);

             if(randomRoll <= 50){
                 console.log(" And you sleep well.")
                 hero.hitPoints = hero.maxHitPoints;
                 hero.magicPoints = hero.maxMagicPoints;
                 console.log("");
                 promptVentureForward(hero);
             }

             else{
                 var randomMonster = new generateRandomMonster.generateRandomMonster();
                 randomMonster.hitPoints = randomMonster.maxHitPoints;
                 console.log("");
                 console.log(" Your sleep has been interrupted by a " + randomMonster.name);
                 console.log("");
                 monsterTurn(hero, randomMonster);
             }
         }

         else if(answers.action === "Print Stats"){
             hero.printStats();
             console.log("");
             console.log("");
             promptVentureForward(hero);
         }

         else if(answers.action === "Exit"){
            console.log(" So long, " + hero.name);
         }

         else{
             console.log(" Something has gone wrong.");
         }
     })
}

function heroTurn(hero, monster){
    var choices = getCombatChoices(hero.profession);

    inquirer
     .prompt([
         {
             type: "list",
             name: "action",
             message: "What would you like to do?",
             choices: choices
         }
     ]).then(function(answers) {
         if(answers.action === "Attack"){
            var isHit = hero.attack(monster)

            if(isHit === true){
                console.log(" " + hero.name + "'s attack hit");
                var rawDamage = hero.dealDamage();
                console.log(" the raw damage is " + rawDamage);
                var reduction = monster.reduceDamage(rawDamage);
                console.log(" The " + monster.name + "'s armor reduced the damage by " + reduction);
                var damageThisTurn = rawDamage - reduction;

                if(damageThisTurn <= 0){
                    damageThisTurn = 1;
                }
                console.log(" The " + monster.name + " takes a total of " + damageThisTurn + " damage");

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
                  console.log("");
                  promptVentureForward(hero);
                    }
            }
        
            else{
                console.log(" " + hero.name + "'s attack missed");
                console.log("");
                monsterTurn(hero, monster);
            }
         }

         if(answers.action === "Cast a Spell"){
             var choices = hero.spells;

             inquirer
              .prompt([
                  {
                    type: "list",
                    name: "selectedSpell",
                    message: " What spell would you like to cast?",
                    choices: choices
                  }
              ]).then(function(answers){
                  var selectedSpell = answers.selectedSpell;

                  for(i = 0; i < spells.spellArray.length; i++){
                      if(selectedSpell === spells.spellArray[i].name){
                          var selectedType = spells.spellArray[i].type;
                          
                          if(spells.spellArray[i].magicPointsCost > hero.magicPoints){
                              console.log(" " + hero.name + " does not have enough magic points left to cast " + selectedSpell);
                              console.log("");
                              heroTurn(hero,monster);
                          }

                          else{
                              hero.magicPoints -= spells.spellArray[i].magicPointsCost;
                              console.log(" " + hero.name + " now has " + hero.magicPoints + " magic points left.");
                              console.log("");

                              if(selectedType === "Attack"){
                                console.log(" You cast " + selectedSpell + " upon the " + monster.name);
                                var damage = spells.spellArray[i].value;
                                console.log(" The " + monster.name + " takes " + damage + " points of damage.");
                                monster.hitPoints -= damage;
                                console.log(" The " + monster.name + " now has " + monster.hitPoints + " Hit Points left");
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
                                    console.log("");
                                    promptVentureForward(hero);
                                }
                            }
  
                            if(selectedType === "Healing"){
                                console.log(" You cast " + selectedSpell + " upon yourself.");
                                var preHealing = hero.hitPoints;
                                var intendedHealing = spells.spellArray[i].value;
                                var intendedTotalHealing = intendedHealing + hero.hitPoints;
                                
                                if(intendedTotalHealing > hero.maxHitPoints){
                                    hero.hitPoints = hero.maxHitPoints;
                                    var difference = hero.hitPoints - preHealing;
                                    console.log(" " + hero.name + " has regained " + difference + " Hit Points");
                                    console.log("");
                                    monsterTurn(hero,monster);
                                }
  
                                else{
                                    hero.hitPoints = intendedTotalHealing;
                                    console.log(" " + hero.name + " has regained " + spells.spellArray[i].value + " Hit Points.");
                                    console.log("");
                                    monsterTurn(hero,monster);
                                }
                            }
                        }
                      }
                  }
              })
         }

         if(answers.action === "Flee"){
             var heroRoll = Math.round((Math.random() * 12) + 1);
             var monsterRoll = Math.round((Math.random() * 12) + 1);

             var heroEscape = heroRoll + hero.agility;
             var monsterPreventEscape = monsterRoll + monster.agility;

             console.log(" " + hero.name + " rolled a " + heroEscape + " to flee.");
             console.log(" The " + monster.name + " rolled a " + monsterPreventEscape + " to stop you.");
             console.log("");

             if(heroEscape >= monsterPreventEscape){
                console.log(" You successfully escape with your life");
                console.log("")
                promptVentureForward(hero);
             }

             else{
                 console.log(" You try to escape but the " + monster.name + " catches you.");
                 monsterTurn(hero,monster);
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
        var reduction = hero.reduceDamage(rawDamage);
        console.log(" " + hero.name + "'s armor reduced the damage by " + reduction);
        var damageThisTurn = (rawDamage - reduction);

        if(damageThisTurn <= 1){
            damageThisTurn = 1;
        }

        console.log(" " + hero.name + " takes a total of " + damageThisTurn + " damage");

        hero.takeDamage(damageThisTurn);
        console.log(" " + hero.name + " has " + hero.hitPoints + " Hit Points left.");
        var checkLife = hero.isAlive();

        if(checkLife === true){
            console.log("");
            heroTurn(hero, monster);
        }

        else{
            console.log(" " + hero.name + " has been slain.")
            console.log(" Game over.");
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
        monster.hitPoints = monster.maxHitPoints;
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