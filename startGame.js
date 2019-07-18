var inquirer = require("inquirer");

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
        var hero = new createCharacter(answers.name, answers.race, answers.profession);
        hero.printStats();
    });

    //a constructor for building the hero
function createCharacter(name, race, profession){
    this.name = name;
    this.race = race;
    this.profession = profession;

    this.strength = getStrength(this.race, this.profession);
    this.agility = getAgility(this.race, this.profession);
    this.mind = getMind(this.race, this.profession);;
    this.charisma = getCharisma(this.race, this.profession);;

    this.level = 1;
    this.hitPoints = this.strength * 2;
    this.magicPoints = getMagicPoints(this.mind, this.profession);
    
    this.printStats = function(){
        console.log("");
        console.log(" Name: " + this.name + "\n Race: " + this.race + "\n Profession: " + 
        this.profession);
        console.log("");
        console.log(" Strength: " + this.strength + "\n Agility: " + this.agility + "\n Mind: "
        + this.mind + "\n Charisma: " + this.charisma);
        console.log("");
        console.log(" Level: " + this.level + "\n HP: " + this.hitPoints + "\n MP: " +
        this.magicPoints);
    }
}
    //A function that returns the hero's strength stat
function getStrength(race, profession){
    switch(race){
        case "Human":
            if(profession === "Warrior"){
                return 11;
            }

            else if(profession === "Thief"){
                return 7;
            }

            else if(profession === "Mage"){
                return 7;
            }

            else if(profession === "Paladin"){
                return 9;
            }

            else if(profession === "Bard"){
                return 7;
            }

            else{
                console.log("Something has gone wrong")
            }
            break;
        
        case "Elf":
                if(profession === "Warrior"){
                    return 10;
                }
    
                else if(profession === "Thief"){
                    return 6;
                }
    
                else if(profession === "Mage"){
                    return 6;
                }
    
                else if(profession === "Paladin"){
                    return 8;
                }
    
                else if(profession === "Bard"){
                    return 6;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
        
        case "Dwarf":
                if(profession === "Warrior"){
                    return 13;
                }
    
                else if(profession === "Thief"){
                    return 9;
                }
    
                else if(profession === "Mage"){
                    return 9;
                }
    
                else if(profession === "Paladin"){
                    return 11;
                }
    
                else if(profession === "Bard"){
                    return 9;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;

        case "Halfling":
                if(profession === "Warrior"){
                    return 10;
                }
    
                else if(profession === "Thief"){
                    return 6;
                }
    
                else if(profession === "Mage"){
                    return 6;
                }
    
                else if(profession === "Paladin"){
                    return 8;
                }
    
                else if(profession === "Bard"){
                    return 6;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
    }
}
    //A function that returns the hero's Agility
function getAgility(race, profession){
    switch(race){
        case "Human":
                if(profession === "Warrior"){
                    return 7;
                }
    
                else if(profession === "Thief"){
                    return 11;
                }
    
                else if(profession === "Mage"){
                    return 7;
                }
    
                else if(profession === "Paladin"){
                    return 7;
                }
    
                else if(profession === "Bard"){
                    return 8;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
        
        case "Elf":
                if(profession === "Warrior"){
                    return 7;
                }
    
                else if(profession === "Thief"){
                    return 11;
                }
    
                else if(profession === "Mage"){
                    return 7;
                }
    
                else if(profession === "Paladin"){
                    return 7;
                }
    
                else if(profession === "Bard"){
                    return 8;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
        
        case "Dwarf":
                if(profession === "Warrior"){
                    return 6;
                }
    
                else if(profession === "Thief"){
                    return 10;
                }
    
                else if(profession === "Mage"){
                    return 6;
                }
    
                else if(profession === "Paladin"){
                    return 6;
                }
    
                else if(profession === "Bard"){
                    return 7;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;

        case "Halfling":
                if(profession === "Warrior"){
                    return 8;
                }
    
                else if(profession === "Thief"){
                    return 12;
                }
    
                else if(profession === "Mage"){
                    return 8;
                }
    
                else if(profession === "Paladin"){
                    return 8;
                }
    
                else if(profession === "Bard"){
                    return 9;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
    }
}
    // A function that returns the hero's Mind
function getMind(race, profession){
    switch(race){
        case "Human":
                if(profession === "Warrior"){
                    return 7;
                }
    
                else if(profession === "Thief"){
                    return 7;
                }
    
                else if(profession === "Mage"){
                    return 11;
                }
    
                else if(profession === "Paladin"){
                    return 8;
                }
    
                else if(profession === "Bard"){
                    return 8;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
        
        case "Elf":
                if(profession === "Warrior"){
                    return 8;
                }
    
                else if(profession === "Thief"){
                    return 8;
                }
    
                else if(profession === "Mage"){
                    return 12;
                }
    
                else if(profession === "Paladin"){
                    return 9;
                }
    
                else if(profession === "Bard"){
                    return 9;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
        
        case "Dwarf":
                if(profession === "Warrior"){
                    return 7;
                }
    
                else if(profession === "Thief"){
                    return 7;
                }
    
                else if(profession === "Mage"){
                    return 11;
                }
    
                else if(profession === "Paladin"){
                    return 8;
                }
    
                else if(profession === "Bard"){
                    return 8;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;

        case "Halfling":
                if(profession === "Warrior"){
                    return 7;
                }
    
                else if(profession === "Thief"){
                    return 7;
                }
    
                else if(profession === "Mage"){
                    return 11;
                }
    
                else if(profession === "Paladin"){
                    return 8;
                }
    
                else if(profession === "Bard"){
                    return 8;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
    }
}
    //A function that returns the hero's Charisma
function getCharisma(race, profession){
    switch(race){
        case "Human":
                if(profession === "Warrior"){
                    return 7;
                }
    
                else if(profession === "Thief"){
                    return 7;
                }
    
                else if(profession === "Mage"){
                    return 7;
                }
    
                else if(profession === "Paladin"){
                    return 8;
                }
    
                else if(profession === "Bard"){
                    return 9;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
        
        case "Elf":
                if(profession === "Warrior"){
                    return 7;
                }
    
                else if(profession === "Thief"){
                    return 7;
                }
    
                else if(profession === "Mage"){
                    return 7;
                }
    
                else if(profession === "Paladin"){
                    return 8;
                }
    
                else if(profession === "Bard"){
                    return 9;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
        
        case "Dwarf":
                if(profession === "Warrior"){
                    return 6;
                }
    
                else if(profession === "Thief"){
                    return 6;
                }
    
                else if(profession === "Mage"){
                    return 6;
                }
    
                else if(profession === "Paladin"){
                    return 7;
                }
    
                else if(profession === "Bard"){
                    return 8;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;

        case "Halfling":
                if(profession === "Warrior"){
                    return 7;
                }
    
                else if(profession === "Thief"){
                    return 7;
                }
    
                else if(profession === "Mage"){
                    return 7;
                }
    
                else if(profession === "Paladin"){
                    return 8;
                }
    
                else if(profession === "Bard"){
                    return 9;
                }
    
                else{
                    console.log("Something has gone wrong")
                }
            break;
    }
}

function getMagicPoints(mind, profession){
    switch(profession){
        case "Mage":
            var magicPoints = mind * 3
            return magicPoints;

        case "Paladin":
            var magicPoints = parseInt(mind * 1.5);
            return magicPoints;

        case "Bard":
            var magicPoints = parseInt(mind * 1.5);
            return magicPoints;

        default:
            return 0;
    }
}