var inquirer = require("inquirer");
var characterCreation = require("./characterCreation.js")
var weapons = require("./Weapons/weapons.js")
var armors = require("./Armor/armors.js")
var merchants = require("./Merchants/merchants.js")
var monsters = require("./monsters/monsters.js")
var battleInterface = require("./battleInterface.js")


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

        //This function builds a character.
    ]).then(function(answers){
        var hero = new characterCreation.createCharacter(answers.name, answers.race, answers.profession);
        hero.printStats();
        console.log("");
        console.log(" Hello " + hero.name + ", before you leave you should buy some equipment.");
        console.log("");
        battleInterface.displayMerchant(hero, merchants.heimdall);
})