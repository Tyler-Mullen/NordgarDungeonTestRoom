var inquirer = require("inquirer");
var checkCompatibility = require("./checkCompatibility.js")
var battleInterface = require("./battleInterface.js")
var monsters = require("./monsters/monsters.js")

function buyAnother(firstShop, hero){
    inquirer
     .prompt([
         {
             type: "confirm",
             name: "buyAnother",
             message: "Would you like to purchase another item?"
         }
     ]).then(function(answers){
         if(answers.buyAnother === true){
            displayFirstShop(firstShop, hero);
         }

         else{
            console.log(" Good luck on your journey.")
            battleInterface.displayBattle(hero, monsters.orc);
         }
     })
}

function displayFirstShop(firstShop, hero){
    //This function allows the player to select items before entering Nordgar Dungeon.
    inquirer
    .prompt([
        {
            type: "list",
            name: "boughtItem",
            message: "Heimdall's Blacksmith",
            choices: firstShop
        },

        {
            type: "confirm",
            name: "didTheyBuy",
            message: "Would you like to purchase this item?"
        }
    ]).then(function(answers){
       var selectedItem;
        if(answers.didTheyBuy === true){
            
           //If the player selects an item, a for loop will search the item in the
           //firstShop array
            for(i = 0; i < firstShop.length; i++){
                if(answers.boughtItem === firstShop[i].name){
                   selectedItem = firstShop[i];

                   if(selectedItem.baseCost > hero.gold){
                       console.log("I'm sorry you cannot afford that item.")
                       buyAnother(firstShop, hero);
                   }

                   else{

                    var checkItem = checkCompatibility.checkCompatibility(selectedItem, hero);

                    if(checkItem === true){
                       if(i > 5){
                           hero.armor = selectedItem;
                           hero.spendGold(selectedItem.baseCost);
                           hero.printStats();
                           console.log(" Thank you for buying a " + selectedItem.name);
                           buyAnother(firstShop, hero);
                       }

                       else{
                           hero.weapon = selectedItem;
                           hero.spendGold(selectedItem.baseCost);
                           hero.printStats();
                           console.log(" Thank you for buying a " + selectedItem.name);
                           buyAnother(firstShop, hero);
                       }
                    }

                    else {
                        console.log(" I'm sorry, a " + hero.profession + " cannot equip a " +
                         selectedItem.name);
                         buyAnother(firstShop, hero);
                    }
                   }
                }
            }
       }

        else{
            buyAnother(firstShop, hero);
        }
    })
}



module.exports = {
    displayFirstShop: function(firstShop, hero){
            //This function allows the player to select items before entering Nordgar Dungeon.
            inquirer
            .prompt([
                {
                    type: "list",
                    name: "boughtItem",
                    message: "Heimdall's Blacksmith",
                    choices: firstShop
                },
        
                {
                    type: "confirm",
                    name: "didTheyBuy",
                    message: "Would you like to purchase this item"
                }
            ]).then(function(answers){
               var selectedItem;
                if(answers.didTheyBuy === true){
                    
                   //If the player selects an item, a for loop will search the item in the
                   //firstShop array
                    for(i = 0; i < firstShop.length; i++){
                        if(answers.boughtItem === firstShop[i].name){
                           selectedItem = firstShop[i];
        
                           if(selectedItem.baseCost > hero.gold){
                               console.log("I'm sorry you cannot afford that item.")
                               buyAnother(firstShop, hero);
                           }
        
                           else{

                            var checkItem = checkCompatibility.checkCompatibility(selectedItem, hero);

                            if(checkItem === true){
        
                               if(i > 5){
                                   hero.armor = selectedItem;
                                   hero.spendGold(selectedItem.baseCost);
                                   hero.printStats();
                                   console.log(" Thank you for buying a " + selectedItem.name);
                                   buyAnother(firstShop, hero);
                               }
        
                               else{
                                   hero.weapon = selectedItem;
                                   hero.spendGold(selectedItem.baseCost);
                                   hero.printStats();
                                   console.log(" Thank you for buying a " + selectedItem.name);
                                   buyAnother(firstShop, hero);
                               }

                            }

                            else{
                                console.log(" I'm sorry, a " + hero.profession + " cannot equip a " +
                                selectedItem.name);
                                buyAnother(firstShop, hero);
                            }
                           }
                        }
                    }
               }
        
                else{
                    buyAnother(firstShop, hero);
                }
            })
    }
}