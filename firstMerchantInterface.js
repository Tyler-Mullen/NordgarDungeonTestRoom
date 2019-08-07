var inquirer = require("inquirer");


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
                   }

                   else{

                       if(i > 5){
                           hero.armor = selectedItem;
                           hero.spendGold(selectedItem.baseCost);
                           hero.printStats();
                           console.log(" Thank you for buying a " + selectedItem.name);
                           displayFirstShop(firstShop, hero);
                       }

                       else{
                           hero.weapon = selectedItem;
                           hero.spendGold(selectedItem.baseCost);
                           hero.printStats();
                           console.log(" Thank you for buying a " + selectedItem.name);
                           displayFirstShop(firstShop, hero);
                       }
                   }
                }
            }
       }

        else{
            console.log(" Thanks Anyway.")
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
                           }
        
                           else{
        
                               if(i > 5){
                                   hero.armor = selectedItem;
                                   hero.spendGold(selectedItem.baseCost);
                                   hero.printStats();
                                   console.log(" Thank you for buying a " + selectedItem.name);
                                   displayFirstShop(firstShop, hero);
                               }
        
                               else{
                                   hero.weapon = selectedItem;
                                   hero.spendGold(selectedItem.baseCost);
                                   hero.printStats();
                                   console.log(" Thank you for buying a " + selectedItem.name);
                                   displayFirstShop(firstShop, hero);
                               }
                           }
                        }
                    }
               }
        
                else{
                    console.log(" Thanks Anyway.")
                }
            })
    }
}