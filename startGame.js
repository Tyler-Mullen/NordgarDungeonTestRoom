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
            type: "list",
            name: "profession",
            message: "What is your progfession?",
            choices: ["Warrior", "Thief", "Mage", "Paladin", "Bard"]
        }
    ]).then(function(answers){
        var hero = new createCharacter(answers.name, answers.race, answers.profession);
        hero.printStats();
    });

function createCharacter(name, race, profession){
    this.name = name;
    this.race = race;
    this.profession = profession;
    
    this.printStats = function(){
        console.log("");
        console.log("Name: " + this.name + "\nRace: " + this.race + "\nProfession: " + 
        this.profession);
    }
}