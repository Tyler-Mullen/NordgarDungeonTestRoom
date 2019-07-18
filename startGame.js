var inquirer = require("inquirer");

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
            type: "input",
            name: "profession",
            message: "What is your progfession?",
            choices: ["Warrior", "Thief", "Mage", "Paladin", "Bard"]
        }
    ]).then(function(answers){
        console.log("Your name is " + answers.name);
        console.log("Your race is " + answers.name);
        console.log("Your profession is " + answers.name);
    });