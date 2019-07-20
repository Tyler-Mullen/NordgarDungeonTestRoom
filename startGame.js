var inquirer = require("inquirer");
var characterCreation = require("./characterCreation.js")


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
        console.log(" Welcome to Nordgar Dungeon " + hero.name + "!");
        console.log(" Please take some time to look around.")
    });