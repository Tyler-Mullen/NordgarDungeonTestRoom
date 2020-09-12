var inquirer = require("inquirer");
var generateRandomMonster = require("./monsters/generateRandomMonster.js");
var generateRandomTrap = require("./traps/generateRandomTrap.js");
var generateRandomMerchant = require("./merchants/generateRandomMerchant.js");
var spells = require("./spells/spells.js");
var checkLevel = require("./checkLevelUp.js");
var checkCompatibility = require("./checkCompatibility.js");

function getCombatChoices(profession){
    switch(profession){
        case "Warrior":
            return ["Attack", "Use an Item", "Print Stats", "Flee"]

        case "Thief":
            return ["Attack", "Use an Item", "Print Stats", "Flee"]

        case "Mage":
            return ["Attack", "Cast a Spell", "Use an Item", "Print Stats", "Flee"]

        case "Paladin":
            return ["Attack", "Cast a Spell", "Use an Item", "Print Stats", "Flee"]

        case "Bard":
            return ["Attack", "Cast a Spell", "Use an Item", "Print Stats", "Flee"]

        default:
            return "Something has gone wrong selecting the combat choices";
    }
}

function getNonCombatChoices(profession){
    switch(profession){
        case "Warrior":
            return ["Venture Forward", "Use an Item", "Rest", "Print Stats", "Exit"]
        
        case "Thief":
            return ["Venture Forward", "Use an Item", "Rest", "Print Stats", "Exit"]

        case "Mage":
            return ["Venture Forward", "Use an Item", "Cast a Spell", "Rest", "Print Stats", "Exit"]

        case "Paladin":
            return ["Venture Forward", "Use an Item", "Cast a Spell", "Rest", "Print Stats", "Exit"]

        case "Bard":
            return ["Venture Forward", "Use an Item", "Rest", "Print Stats", "Exit"]

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

    var heroDie = hero.getHeroDodgeDie(hero);

    var heroSpeedRoll = Math.round((Math.random() * heroDie) + 1) + hero.agility;
    console.log(" " + hero.name + " rolled a " + heroSpeedRoll + " to strike first");
    var monsterSpeedRoll = Math.round((Math.random() * 12) + 1) + monster.agility;
    console.log(" The " + monster.name + " rolled a " + monsterSpeedRoll + " to strike first");
    console.log("");

    if((heroSpeedRoll >= monsterSpeedRoll) && hero.profession === "Thief"){
        backStab(hero,monster);
    }

    else if(heroSpeedRoll >= monsterSpeedRoll){
        heroTurn(hero,monster);
    }

    else{
        monsterTurn(hero,monster);
    }
}

function displayTrap(hero, trap){
    console.log("Have you encountered a " + trap.type);

    if(hero.profession === "Thief" && hero.thievesTools > 0){
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
                console.log("You have disarmed the " + trap.type);
                hero.xp += trap.trapXp;
                hero.thievesTools--;
                console.log("You have gained " + trap.trapXp + " XP.");
                console.log(hero.name + " now has " + hero.xp + " XP.");

                var didILevel = checkLevel.checkIfLeveled(hero);

                if(didILevel === true){
                    hero.levelUp();
                    console.log(" Congratulations, " + hero.name + " is now Level " + hero.level);
                }
                promptVentureForward(hero);
            }

            else if(answers.action === "Dodge the trap"){
                var heroDie = hero.getHeroDodgeDie(hero);

                var dodgeRoll = Math.round(Math.random() * heroDie + (hero.agility + 1));

                console.log("You have rolled a " + dodgeRoll + " to avoid the trap");        

                if(dodgeRoll >= trap.difficulty){
                    console.log("You have successfully dodged the trap");
                    hero.xp += trap.trapXp;
                    console.log(hero.name + " has gained " + trap.trapXp + " XP");
                    console.log(hero.name + " now has " + hero.xp + " xp");
                    console.log();

                    var didILevel = checkLevel.checkIfLeveled(hero);

                    if(didILevel === true){
                        hero.levelUp();
                        console.log(" Congratulations, " + hero.name + " is now Level " + hero.level);
                    }
                    promptVentureForward(hero);
                }
    
                else{
                    console.log("You failed to dodge the trap");
                    hero.takeDamage(trap.damage);
                    console.log(hero.name + " has " + hero.hitPoints + " HP left");

                    if(trap.isPoisonous === true){
                        var poisonRoll = (Math.random() * 18) + 1;

                        if(poisonRoll >= hero.strength){
                            hero.isPoisoned = true;
                            console.log(" " + hero.name + " has been poisoned");
                        }
                    }
    
                    var checkLife = hero.isAlive();
    
                    if(checkLife === true){
                        console.log();
                        promptVentureForward(hero);
                    }
    
                    else {
                        console.log(" " + hero.name + " has been slain.")
                        console.log(" Game over.");
                    }   
                }
            }

            else {
                console.log("Something has gone wrong.");
            }
        })
    }

    else {
        var heroDie = hero.getHeroDodgeDie(hero);

        var dodgeRoll = Math.round(Math.random() * heroDie + (hero.agility + 1));
        console.log("You have rolled a " + dodgeRoll + " to avoid the trap");        

        if(dodgeRoll >= trap.difficulty){
            console.log("You have successfully dodged the trap");
            hero.xp += trap.trapXp;
            console.log(hero.name + " has gained " + trap.trapXp + " XP");
            console.log(hero.name + " now has " + hero.xp + " xp");
            console.log();

            var didILevel = checkLevel.checkIfLeveled(hero);

            if(didILevel === true){
                hero.levelUp();
                console.log(" Congratulations, " + hero.name + " is now Level " + hero.level);
            }
            promptVentureForward(hero);
        }
    
        else{
            console.log("You failed to dodge the trap");
            hero.takeDamage(trap.damage);
            console.log(hero.name + " has " + hero.hitPoints + " HP left");

            if(trap.isPoisonous === true){
                var poisonRoll = (Math.random() * 18) + 1;

                if(poisonRoll >= hero.strength){
                    hero.isPoisoned = true;
                    console.log(" " + hero.name + " has been poisoned");
                }
            }
    
            var checkLife = hero.isAlive();
    
            if(checkLife === true){
                console.log();
                promptVentureForward(hero);
            }
    
            else {
                console.log(" " + hero.name + " has been slain.")
                console.log(" Game over.");
                process.exit(1);
            }
        }
    }
}

function displayMerchant(hero, merchant){
    //This function allows the player to select items before entering Nordgar Dungeon.

    inquirer
    .prompt([
        {
            type: "list",
            name: "boughtItem",
            message: merchant.name + "'s Shop",
            choices: merchant.itemsForSale
        },

        {
            type: "confirm",
            name: "didTheyBuy",
            message: "Would you like to purchase this item?"
        }
    ]).then(function(answers){
       var selectedItem;
        if(answers.didTheyBuy === true){
            console.log(answers.boughtItem);
        
           if(answers.boughtItem === "Thieves' Tools"){
               var finalPrice = Math.round(10 - ((hero.charisma - 7) * 0.4));

               if(hero.gold >= finalPrice){
                  if(hero.profession === "Thief"){
                           hero.thievesTools++;
                           hero.spendGold(finalPrice);
                           hero.printStats();
                           console.log(" Thank you for buying a set of thieves' tools");
                           buyAnother(hero, merchant);
                  }

                  else{
                      console.log("I'm sorry, you need to be a thief in order to purchase thieves' tools");
                      buyAnother(hero, merchant);
                  }
               }

               else{
                console.log("I'm sorry you cannot afford that item.")
                buyAnother(hero, merchant);
               }
           }

           else if(answers.boughtItem === "Camping Supplies"){
                var finalPrice = Math.round(15 - ((hero.charisma - 7) * 0.6));

                if(hero.gold >= finalPrice){
                           hero.campingSupplies++;
                           hero.spendGold(finalPrice);
                           hero.printStats();
                           console.log(" Thank you for buying a set of camping supplies");
                           buyAnother(hero, merchant);
                }

                else{
                    console.log("I'm sorry you cannot afford that item.")
                    buyAnother(hero, merchant);
                }
           }

           else if(answers.boughtItem === "Healing Potion"){
              var finalPrice = Math.round(15 - ((hero.charisma - 7) * 0.6));

              if(hero.gold >= finalPrice){
                  hero.healingPotionCount++;
                  hero.spendGold(finalPrice);
                  hero.printStats();
                  console.log("Thank you for buying a Healing Potion.");
                  buyAnother(hero, merchant)
              }

              else{
                  console.log("I'm sorry you can't afford that item");
                  buyAnother(hero, merchant);
              }
           }

           else if(answers.boughtItem === "Mana Potion"){
            var finalPrice = Math.round(20 - ((hero.charisma - 7) * 0.8));

            if(hero.gold >= finalPrice){
                hero.manaPotionCount++;
                hero.spendGold(finalPrice);
                hero.printStats();
                console.log("Thank you for buying a Mana Potion.");
                buyAnother(hero, merchant)
            }

            else{
                console.log("I'm sorry you can't afford that item");
                buyAnother(hero, merchant);
              }
            }

            else if(answers.boughtItem === "Antidote"){
                var finalPrice = Math.round(20 - ((hero.charisma - 7) * 0.8));

                if(hero.gold >= finalPrice){
                    hero.antidoteCount++;
                    hero.spendGold(finalPrice);
                    hero.printStats();
                    console.log("Thank you for buying an Antidote.");
                    buyAnother(hero, merchant)
                }
    
                else{
                    console.log("I'm sorry you can't afford that item");
                    buyAnother(hero, merchant);
                  }
                }

           else {

            //If the player selects an item, a for loop will search the item in the
            //firstShop array
            for(i = 0; i < merchant.itemsForSale.length; i++){
                if(answers.boughtItem === merchant.itemsForSale[i].name){
                   selectedItem = merchant.itemsForSale[i];
                   var finalPrice = Math.round(selectedItem.baseCost - ((hero.charisma - 7) * (selectedItem.baseCost * 0.04)));

                   if(finalPrice > hero.gold){
                       console.log("I'm sorry you cannot afford that item.")
                       buyAnother(hero, merchant);
                   }

                   else{

                    var checkItem = checkCompatibility.checkCompatibility(selectedItem, hero);

                    if(checkItem === true){

                       if(i > (merchant.numOfWeapons - 1)){
                           hero.armor = selectedItem;
                           hero.spendGold(finalPrice);
                           hero.printStats();
                           console.log(" Thank you for buying a " + selectedItem.name);
                           buyAnother(hero, merchant);
                       }

                       else{
                           hero.weapon = selectedItem;
                           hero.spendGold(finalPrice);
                           hero.printStats();
                           console.log(" Thank you for buying a " + selectedItem.name);
                           buyAnother(hero, merchant);
                       }

                    }

                    else{
                        console.log(" I'm sorry, a " + hero.profession + " cannot equip a " +
                        selectedItem.name);
                        buyAnother(hero, merchant);
                    }
                   }
                }
            }
           }
       }

        else{
            buyAnother(hero, merchant);
        }
    })
}

function buyAnother(hero, merchant){
    inquirer
     .prompt([
         {
             type: "confirm",
             name: "buyAnother",
             message: "Would you like to purchase another item?"
         }
     ]).then(function(answers){
         if(answers.buyAnother === true){
            displayMerchant(hero, merchant);
         }

         else{
            console.log(" Good luck on your journey.")
            promptVentureForward(hero);
         }
     })
}

function promptVentureForward(hero){

    inquirer
     .prompt([
         {
             type: "list",
             name: "action",
             message: "What would you like to do next",
             choices: getNonCombatChoices(hero.profession)
         }
     ]).then(function(answers){
         if(answers.action === "Venture Forward"){
            var roll = Math.round(Math.random()*100 + 1);
            console.log("The game master rolled a " + roll);

            if(roll >= 86){
                var randomMerchant = new generateRandomMerchant.generateRandomMerchant();
                displayMerchant(hero, randomMerchant);
            }

            else if(roll >= 76){
            var randomTrap = new generateRandomTrap.generateRandomTrap();
            displayTrap(hero, randomTrap);
            }

            else {
            var randomMonster = new generateRandomMonster.generateRandomMonster(hero.level);
            displayBattle(hero, randomMonster);
            }
         }

         else if(answers.action === "Cast a Spell"){
            var choices = hero.outOfCombatSpells;

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

                             switch(selectedType){

                                 case "Barrier":
                                     console.log(" You cast " + selectedSpell + " upon yourself.");

                                     var previousBarrier = hero.barrierHitPoints;
                                     hero.barrierHitPoints = spells.spellArray[i].value;
                                     var barrierDifference = hero.barrierHitPoints - previousBarrier;

                                     if(hero.barrierHitPoints === previousBarrier){
                                       console.log(" You feel the same");
                                       promptVentureForward(hero);
                                     }

                                     else{
                                       console.log(" Your new armor will protect you from an additional " + barrierDifference + " points of damage");
                                       promptVentureForward(hero);
                                     }

                                 break;

                                 case "Cure Ailment":
                                     console.log(" You cast " + selectedSpell + " upon yourself");

                                     if(hero.isPoisoned === true){
                                       console.log(" " + hero.name + " is no longer poisoned.");
                                       hero.isPoisoned === false;
                                       promptVentureForward(hero);
                                     }

                                     else{
                                         console.log("Nothing has changed");
                                         promptVentureForward(hero);
                                     }
                                 break;

                                 case "Healing":
                                   console.log(" You cast " + selectedSpell + " upon yourself.");
                                   var preHealing = hero.hitPoints;
                                   var intendedHealing = spells.spellArray[i].value;
                                   var intendedTotalHealing = intendedHealing + hero.hitPoints;
                                   
                                   if(intendedTotalHealing > hero.maxHitPoints){
                                       hero.hitPoints = hero.maxHitPoints;
                                       var difference = hero.hitPoints - preHealing;
                                       console.log(" " + hero.name + " has regained " + difference + " Hit Points");
                                       console.log("");
                                       promptVentureForward(hero);
                                   }
     
                                   else{
                                       hero.hitPoints = intendedTotalHealing;
                                       console.log(" " + hero.name + " has regained " + spells.spellArray[i].value + " Hit Points.");
                                       console.log("");
                                       promptVentureForward(hero);
                                   }

                                 break;


                                 default:
                                 console.log("You appear to be casting a non-existant spell");
                                 promptVentureForward(hero);
                             }
                       }
                     }
                 }
             })
        }

         else if(answers.action === "Use an Item"){
             var itemArray = ["Back"];

             if(hero.antidoteCount > 0){
                itemArray.unshift("Antidote");
             }

             if(hero.manaPotionCount > 0){
                itemArray.unshift("Mana Potion");
             }

             if(hero.healingPotionCount > 0){
                itemArray.unshift("Healing Potion");
             }

            inquirer
            .prompt([
                {
                    type: "list",
                    name: "selectedItem",
                    message: "What item would you like to use?",
                    choices: itemArray
                }
            ]).then(function(answers){

                if(answers.selectedItem === "Healing Potion"){
                    hero.drinkPotion("Healing", 10);
                    promptVentureForward(hero);
                }

                else if(answers.selectedItem === "Mana Potion"){
                    hero.drinkPotion("Mana Restore", 10);
                    promptVentureForward(hero);
                }

                else if(answers.selectedItem === "Antidote"){
                    hero.drinkPotion("Antidote", 0);
                    promptVentureForward(hero);
                }

                else{
                    promptVentureForward(hero);
                }
            })
         }

         else if(answers.action === "Rest"){

            if(hero.campingSupplies > 0){
                console.log(" You attempt to set up camp for the night. ");
                console.log("");
                
                hero.campingSupplies--;
                console.log(" And you sleep well.")
                hero.rest();
                console.log("");
                promptVentureForward(hero);
            }

            else{
                console.log("Sorry you don't have the supplies you need to set up camp.")
                promptVentureForward(hero);
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
                console.log("");
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
                console.log("");
                console.log(" The " + monster.name + " has " + monster.hitPoints + " Hit Points left.");
                var checkLife = monster.isAlive();
        
                if(checkLife === true){
                    console.log("");
                    monsterTurn(hero,monster);
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

                  var didILevel = checkLevel.checkIfLeveled(hero);
            
                  if(didILevel === true){
                  hero.levelUp();
                  console.log(" Congratulations, " + hero.name + " is now Level " + hero.level);
                }
                  hero.isHasted = false;
                  promptVentureForward(hero);
                    }
            }
        
            else{
                console.log(" " + hero.name + "'s attack missed");
                console.log("");
                monsterTurn(hero,monster);
            }
         }

         else if(answers.action === "Use an Item"){
            var itemArray = ["Back"];

             if(hero.antidoteCount > 0){
                itemArray.unshift("Antidote");
             }

             if(hero.manaPotionCount > 0){
                itemArray.unshift("Mana Potion");
             }

             if(hero.healingPotionCount > 0){
                itemArray.unshift("Healing Potion");
             }

            inquirer
            .prompt([
                {
                    type: "list",
                    name: "selectedItem",
                    message: "What item would you like to use?",
                    choices: itemArray
                }
            ]).then(function(answers){

                if(answers.selectedItem === "Healing Potion"){
                    hero.drinkPotion("Healing", 10);
                    monsterTurn(hero,monster);
                }

                else if(answers.selectedItem === "Mana Potion"){
                    hero.drinkPotion("Mana Restore", 10);
                    monsterTurn(hero,monster);
                }

                else if(answers.selectedItem === "Antidote"){
                    hero.drinkPotion("Antidote", 0);
                    monsterTurn(hero,monster);
                }

                else{
                    heroTurn(hero,monster);
                }
            })
        }

         else if(answers.action === "Cast a Spell"){
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

                              switch(selectedType){
                                  case "Attack":
                                    console.log(" You cast " + selectedSpell + " upon the " + monster.name);
                                    var damage = spells.spellArray[i].value;
                                    console.log(" The " + monster.name + " takes " + damage + " points of damage.");
                                    monster.hitPoints -= damage;
                                    console.log(" The " + monster.name + " now has " + monster.hitPoints + " Hit Points left");
                                    var checkLife = monster.isAlive();
    
                                    if(checkLife === true){
                                        console.log("");
                                        monsterTurn(hero,monster);
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
    
                                        var didILevel = checkLevel.checkIfLeveled(hero);
                
                                        if(didILevel === true){
                                            hero.levelUp();
                                            console.log(" Congratulations, " + hero.name + " is now Level " + hero.level);
                                        }
    
                                        hero.isHasted = false;
                                        promptVentureForward(hero);
                                    }

                                  break;

                                  case "Barrier":
                                      console.log(" You cast " + selectedSpell + " upon yourself.");

                                      var previousBarrier = hero.barrierHitPoints;
                                      hero.barrierHitPoints = spells.spellArray[i].value;
                                      var barrierDifference = hero.barrierHitPoints - previousBarrier;

                                      if(hero.barrierHitPoints === previousBarrier){
                                        console.log(" You feel the same");
                                        monsterTurn(hero,monster);
                                      }

                                      else{
                                        console.log(" Your new armor will protect you from an additional " + barrierDifference + " points of damage");
                                        monsterTurn(hero,monster);
                                      }

                                  break;

                                  case "Blindness":
                                      console.log(" You cast " + selectedSpell + " on the " + monster.name);
                                      var monsterBlindnessSave = Math.round(Math.random * 12 + (monster.mind + 1));

                                      if(monsterBlindnessSave > 19){
                                        console.log(" The " + monster.name + " has resisted your spell.");
                                        monsterTurn(hero,monster);
                                      }

                                      else{
                                          console.log(" The " + monster.name + " has become blind");
                                          monster.isBlinded = true;
                                          monsterTurn(hero,monster);
                                      }

                                  break;

                                  case "Cure Ailment":
                                      console.log(" You cast " + selectedSpell + " upon yourself");

                                      if(hero.isPoisoned === true){
                                        hero.isPoisoned = false;
                                        console.log(" " + hero.name + " is no longer poisoned.");
                                        monsterTurn(hero,monster);
                                      }

                                      else{
                                          console.log("Nothing has changed");
                                          monsterTurn(hero,monster);
                                      }
                                  break;

                                  case "Disappear":
                                      console.log(" You cast " + selectedSpell + " upon yourself.");
                                      console.log(" And you disappear from the " + monster.name + " 's sight.");
                                      hero.isHasted = false;
                                      promptVentureForward(hero);

                                  break;

                                  case "Healing":
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

                                  break;

                                  case "Instant Death":
                                      var monsterDeathSave = Math.round(Math.random() * monster.strength + 1);

                                      if(monsterDeathSave > 22){
                                        console.log(" The " + monster.name + " has survived the death ray.");
                                        monsterTurn(hero,monster);
                                      }

                                      else{
                                          console.log(" The " + monster.name + " turns to dust");
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
    
                                          var didILevel = checkLevel.checkIfLeveled(hero);
                
                                          if(didILevel === true){
                                              hero.levelUp();
                                              console.log(" Congratulations, " + hero.name + " is now Level " + hero.level);
                                          }
    
                                          hero.isHasted = false;
                                          promptVentureForward(hero);
                                      }

                                  break;

                                  case "Quickness Buff":
                                  console.log(" You cast " + selectedSpell + " upon yourself");

                                  if(hero.isHasted === false){
                                    (" You have become much quicker.");
                                    hero.isHasted = true;
                                    monsterTurn(hero,monster);
                                  }

                                  else{
                                    console.log(" You feel the same.");
                                    monsterTurn(hero,monster);
                                  }

                                  break;

                                  default:
                                  console.log("You appear to be casting a non-existant spell");
                                  heroTurn(hero, monster)
                              }
                        }
                      }
                  }
              })
         }

         else if(answers.action === "Print Stats"){
            hero.printStats();
            console.log();
            console.log();
            heroTurn(hero, monster);
         }

         else if(answers.action === "Flee"){
            var heroDie = getHeroDodgeDie(hero)

             var heroRoll = Math.round((Math.random() * heroDie) + 1);
             var monsterRoll = Math.round((Math.random() * 12) + 1);

             var heroEscape = heroRoll + hero.agility;
             var monsterPreventEscape = monsterRoll + monster.agility;

             console.log(" " + hero.name + " rolled a " + heroEscape + " to flee.");
             console.log(" The " + monster.name + " rolled a " + monsterPreventEscape + " to stop you.");
             console.log("");

             if(heroEscape >= monsterPreventEscape){
                console.log(" You successfully escape with your life");
                console.log("")
                hero.isHasted = false;
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
    if(hero.isPoisoned === true){
        console.log(" " + hero.name + " is still poisoned");
        hero.takeDamage(2);

        var checkLife = hero.isAlive();

        if(checkLife === true){
            console.log("");
        }

        else{
            console.log(" " + hero.name + " has been slain");
            console.log(" Game Over");
            process.exit(1);
        }
    }

    var isHit = monster.attack(hero);

    if(isHit === true){
        console.log(" The " + monster.name + "'s attack hit");
        console.log("");
        var rawDamage = monster.dealDamage();
        console.log(" the raw damage is " + rawDamage);
        var reduction = hero.reduceDamage(rawDamage);
        console.log(" " + hero.name + "'s armor reduced the damage by " + reduction);
        var damageThisTurn = (rawDamage - reduction);

        if(damageThisTurn <= 1){
            damageThisTurn = 1;
        }

        hero.takeDamage(damageThisTurn);
        console.log("");
        console.log(" " + hero.name + " has " + hero.hitPoints + " Hit Points left.");

        if(monster.isPoisonous === true){
            var poisonRoll = (Math.random() * 18) + 1;

            if(poisonRoll >= hero.strength){
                hero.isPoisoned = true;
                console.log(" " + hero.name + " has been poisoned");
            }
        }

        var checkLife = hero.isAlive();

        if(checkLife === true){
            console.log("");
            heroTurn(hero, monster);
        }

        else{
            console.log(" " + hero.name + " has been slain.")
            console.log(" Game over.");
            process.exit(1);
        }
    }

    else{
        console.log(" The " + monster.name + "'s attack missed.");
        console.log("");
        heroTurn(hero, monster);
    }
}

function backStab(hero, monster){
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
                console.log(" " + hero.name + "'s sneak attack hit");
                console.log("");
                var rawDamage = (hero.dealDamage() * 2);
                console.log(" the raw damage is " + rawDamage);
                var reduction = monster.reduceDamage(rawDamage);
                console.log(" The " + monster.name + "'s armor reduced the damage by " + reduction);
                var damageThisTurn = rawDamage - reduction;

                if(damageThisTurn <= 0){
                    damageThisTurn = 1;
                }
                console.log(" The " + monster.name + " takes a total of " + damageThisTurn + " damage from "
                + hero.name + "'s backstab");

                monster.takeDamage(damageThisTurn);
                console.log("");
                console.log(" The " + monster.name + " has " + monster.hitPoints + " Hit Points left.");
                var checkLife = monster.isAlive();
        
                if(checkLife === true){
                    console.log("");
                    monsterTurn(hero,monster);
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

                  var didILevel = checkLevel.checkIfLeveled(hero);
            
                  if(didILevel === true){
                  hero.levelUp();
                  console.log(" Congratulations, " + hero.name + " is now Level " + hero.level);
                }
                  promptVentureForward(hero);
                    }
            }
        
            else{
                console.log(" " + hero.name + "'s attack missed");
                console.log("");
                monsterTurn(hero,monster);
            }
         }

         else if(answers.action === "Use an Item"){
            var itemArray = ["Back"];

             if(hero.antidoteCount > 0){
                itemArray.unshift("Antidote");
             }

             if(hero.manaPotionCount > 0){
                itemArray.unshift("Mana Potion");
             }

             if(hero.healingPotionCount > 0){
                itemArray.unshift("Healing Potion");
             }

            inquirer
            .prompt([
                {
                    type: "list",
                    name: "selectedItem",
                    message: "What item would you like to use?",
                    choices: itemArray
                }
            ]).then(function(answers){

                if(answers.selectedItem === "Healing Potion"){
                    hero.drinkPotion("Healing", 10);
                    monsterTurn(hero,monster);
                }

                else if(answers.selectedItem === "Mana Potion"){
                    hero.drinkPotion("Mana Restore", 10);
                    monsterTurn(hero,monster);
                }

                else if(answers.selectedItem === "Antidote"){
                    hero.drinkPotion("Antidote", 0);
                    monsterTurn(hero,monster);
                }

                else{
                    heroTurn(hero,monster);
                }
            })
        }

         else if(answers.action === "Print Stats"){
            hero.printStats();
            console.log();
            console.log();
            heroTurn(hero, monster);
         }

         else if(answers.action === "Flee"){
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

module.exports = {
    displayBattle: function(hero, monster){
        monster.hitPoints = monster.maxHitPoints;
        console.log("");
        console.log(" In the next room you encounter a " + monster.name);
        console.log(" " + hero.name + " Prepare for battle");
        console.log("");

        var heroDie = hero.getHeroDodgeDie(hero);

        var heroSpeedRoll = Math.round((Math.random() * heroDie) + 1) + hero.agility;
        console.log(" " + hero.name + " rolled a " + heroSpeedRoll + " to strike first");
        var monsterSpeedRoll = Math.round((Math.random() * 12) + 1) + monster.agility;
        console.log(" The " + monster.name + " rolled a " + monsterSpeedRoll + " to strike first");
        console.log("");

        if((heroSpeedRoll >= monsterSpeedRoll) && hero.profession === "Thief"){
            backStab(hero, monster);
        }

        else if(heroSpeedRoll >= monsterSpeedRoll){
            heroTurn(hero, monster);
        }

        else{
            monsterTurn(hero, monster);
        }
    },

    displayMerchant: function(hero, merchant){
        //This function allows the player to select items before entering Nordgar Dungeon.
    inquirer
    .prompt([
        {
            type: "list",
            name: "boughtItem",
            message: merchant.name + "'s Shop",
            choices: merchant.itemsForSale
        },

        {
            type: "confirm",
            name: "didTheyBuy",
            message: "Would you like to purchase this item"
        }
    ]).then(function(answers){
       var selectedItem;
        if(answers.didTheyBuy === true){
            console.log(answers.boughtItem);
        
           if(answers.boughtItem === "Thieves' Tools"){
            var finalPrice = Math.round(10 - ((hero.charisma - 7) * 0.4))

               if(hero.gold >= 10){
                  if(hero.profession === "Thief"){
                           hero.thievesTools++;
                           hero.spendGold(finalPrice);
                           hero.printStats();
                           console.log(" Thank you for buying a set of thieves' tools");
                           buyAnother(hero, merchant);
                  }

                  else{
                      console.log("I'm sorry, you need to be a thief in order to purchase thieves' tools");
                      buyAnother(hero, merchant);
                  }
               }

               else{
                console.log("I'm sorry you cannot afford that item.")
                buyAnother(hero, merchant);
               }
           }

           else if(answers.boughtItem === "Camping Supplies"){
            var finalPrice = Math.round(15 - ((hero.charisma - 7) * 0.6));

                if(hero.gold >= finalPrice){
                           hero.campingSupplies++;
                           hero.spendGold(finalPrice);
                           hero.printStats();
                           console.log(" Thank you for buying a set of camping supplies");
                           buyAnother(hero, merchant);
                }

                else{
                    console.log("I'm sorry you cannot afford that item.")
                    buyAnother(hero, merchant);
                }
           }

           else if(answers.boughtItem === "Healing Potion"){
            var finalPrice = Math.round(15 - ((hero.charisma - 7) * 0.6));

            if(hero.gold >= finalPrice){
                hero.healingPotionCount++;
                hero.spendGold(finalPrice);
                hero.printStats();
                console.log("Thank you for buying a Healing Potion.");
                buyAnother(hero, merchant)
            }

            else{
                console.log("I'm sorry you can't afford that item");
                buyAnother(hero, merchant);
            }
         }

         else if(answers.boughtItem === "Mana Potion"){
          var finalPrice = Math.round(20 - ((hero.charisma - 7) * 0.8));

          if(hero.gold >= finalPrice){
              hero.manaPotionCount++;
              hero.spendGold(finalPrice);
              hero.printStats();
              console.log("Thank you for buying a Mana Potion.");
              buyAnother(hero, merchant)
          }

          else{
              console.log("I'm sorry you can't afford that item");
              buyAnother(hero, merchant);
            }
          }

          else if(answers.boughtItem === "Antidote"){
              var finalPrice = Math.round(20 - ((hero.charisma - 7) * 0.8));

              if(hero.gold >= finalPrice){
                  hero.antidoteCount++;
                  hero.spendGold(finalPrice);
                  hero.printStats();
                  console.log("Thank you for buying an Antidote.");
                  buyAnother(hero, merchant)
              }
  
              else{
                  console.log("I'm sorry you can't afford that item");
                  buyAnother(hero, merchant);
                }
              }

           else {

            //If the player selects an item, a for loop will search the item in the
            //firstShop array
            for(i = 0; i < merchant.itemsForSale.length; i++){
                if(answers.boughtItem === merchant.itemsForSale[i].name){
                   selectedItem = merchant.itemsForSale[i];
                   var finalPrice = Math.round(selectedItem.baseCost - ((hero.charisma - 7) * (selectedItem.baseCost * 0.04)));

                   if(finalPrice > hero.gold){
                       console.log("I'm sorry you cannot afford that item.")
                       buyAnother(hero, merchant);
                   }

                   else{

                    var checkItem = checkCompatibility.checkCompatibility(selectedItem, hero);

                    if(checkItem === true){

                       if(i > (merchant.numOfWeapons - 1)){
                           hero.armor = selectedItem;
                           hero.spendGold(finalPrice);
                           hero.printStats();
                           console.log(" Thank you for buying a " + selectedItem.name);
                           buyAnother(hero, merchant);
                       }

                       else{
                           hero.weapon = selectedItem;
                           hero.spendGold(finalPrice);
                           hero.printStats();
                           console.log(" Thank you for buying a " + selectedItem.name);
                           buyAnother(hero, merchant);
                       }

                    }

                    else{
                        console.log(" I'm sorry, a " + hero.profession + " cannot equip a " +
                        selectedItem.name);
                        buyAnother(hero, merchant);
                    }
                   }
                }
            }
           }
       }

        else{
            buyAnother(hero, merchant);
        }
    })
    }
}