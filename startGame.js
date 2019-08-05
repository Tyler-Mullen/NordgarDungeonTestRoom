var inquirer = require("inquirer");
var characterCreation = require("./characterCreation.js")
var weapons = require("./Weapons/weapons.js")
var armors = require("./Armor/armors.js")
var merchants = require("./Merchants/merchants.js")

//Prompts the user with a character creation screen.
inquirer
    .prompt([

        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },

        {
            type: "list",
            name: "race",
            message: "What is your race?",
            choices: ["Human", "Elf", "Dwarf", "Halfling"]
        },

        {
            type: "list",
            name: "profession",
            message: "What is your profession?",
            choices: ["Warrior", "Thief", "Mage", "Paladin", "Bard"]
        }
    ]).then(function(answers){
        var hero = new characterCreation.createCharacter(answers.name, answers.race, answers.profession);
        hero.printStats();
        console.log("");
        console.log(" Hello " + hero.name + ", before you leave you should buy some equipment.");
        console.log("");
        console.log(merchants.firstMerchanslet.message);

        inquirer
         .prompt([
             {
                 type: "list",
                 name: "boughtItem",
                 message: "Heimdall's Blacksmith",
                 choices: [merchants.firstMerchant.item1, merchants.firstMerchant.item2,
                 merchants.firstMerchant.item3, merchants.firstMerchant.item4, 
                 merchants.firstMerchant.item5, merchants.firstMerchant.item6, 
                 merchants.firstMerchant.item7, merchants.firstMerchant.item8, 
                 merchants.firstMerchant.item9]
             },

             {
                 type: "confirm",
                 name: "didTheyBuy",
                 message: "Would you like to purchase this item?"
             }
         ]).then(function(answers){
             if(answers.didTheyBuy === true){
                 console.log(" Thank you for buying a " + answers.boughtItem);
             }

             else{
                 console.log(" Thanks Anyway.")
             }
         })
    });