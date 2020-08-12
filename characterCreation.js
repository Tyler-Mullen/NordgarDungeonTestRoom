var weapons = require("./weapons/weapons.js");
var armors = require("./armor/armors.js");
var spells = require("./spells/spells.js");

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
    //Returns magic points for the hero if the player picks a Mage, Paladin or Bard.
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

    function getSpells(profession){
        if(profession === "Mage"){
            return ["Fire Bolt", "Minor Healing"];
        }

        else if(profession === "Paladin"){
            return ["Minor Healing"]
        }

        else if(profession === "Bard"){
            return ["Fire Bolt"]
        }

        else{
            return ["None"];
        }
    }

    function getOutOfCombatSpells(profession){
        if(profession === "Mage"){
            return ["Minor Healing"];
        }

        else if(profession === "Paladin"){
            return ["Minor Healing"];
        }

        else{
            return ["None"];
        }
    }

    function getThievesTools(profession){
        if(profession === "Thief"){
            return 3;
        }

        else{
            return 0;
        }
    }

//Builds the hero and exports it to be used in other files.
module.exports = {
    //A constructor that build the game's hero.
    createCharacter: function (name, race, profession){
        this.name = name;
        this.race = race;
        this.profession = profession;
    
        this.strength = getStrength(this.race, this.profession);
        this.agility = getAgility(this.race, this.profession);
        this.mind = getMind(this.race, this.profession);;
        this.charisma = getCharisma(this.race, this.profession);;
    
        this.level = 1;
        this.hitPoints = this.strength * 2;
        this.maxHitPoints = this.strength * 2;
        this.magicPoints = getMagicPoints(this.mind, this.profession);
        this.maxMagicPoints = getMagicPoints(this.mind, this.profession);
        this.xp = 0;
        this.gold = 100;
        this.items = [];
        this.weapon = weapons.none;
        this.armor = armors.none;
        this.thievesTools = getThievesTools(this.profession);
        this.campingSupplies = 0;

        this.spells = getSpells(this.profession);
        this.outOfCombatSpells = getOutOfCombatSpells(this.profession);        
        
        this.printStats = function(){
            console.log("");
            console.log(" Name: " + this.name + "\n Race: " + this.race + "\n Profession: " + 
            this.profession);
            console.log("");
            console.log(" Strength: " + this.strength + "\n Agility: " + this.agility + "\n Mind: "
            + this.mind + "\n Charisma: " + this.charisma);
            console.log("");
            console.log(" Level: " + this.level + "\n HP: " + this.hitPoints + "/" + this.maxHitPoints + "\n MP: " +
            this.magicPoints + "/" + this.maxMagicPoints);
            console.log(" Weapon: " + this.weapon.name + "\n Armor: " + this.armor.name + "\n Thieves Tools: " + this.thievesTools + "\n Camping Supplies: " + this.campingSupplies);
            console.log("");
            console.log(" Gold: " + this.gold + "\n XP: " + this.xp);
            console.log("");
            console.log(" Spells: " + this.spells);
            console.log(" Out of Combat Spells: " + this.outOfCombatSpells);
            console.log("");
        }

        this.gainGold = function(value){
            this.gold += value;
        }

        this.spendGold = function(value){
            this.gold -= value;
        }

        this.attack = function(enemy){
            var heroRoll = Math.round((Math.random() * 12) + 1);
            var enemyRoll = Math.round((Math.random() * 12) + 1);

            var heroAttack = heroRoll + this.strength;
            var enemyAttack = enemyRoll + enemy.agility;

            console.log(" " + this.name + " rolled a " + heroAttack + " to hit.");
            console.log(" The " + enemy.name + " rolled a " + enemyAttack + " to dodge.");

            if(heroAttack >= enemyAttack){
                return true;
            }

            else{
                return false;
            }
        }

        this.dealDamage = function(){
            var difference = this.weapon.maxDamage - this.weapon.minDamage
            var generatedRoll = ((Math.random() * difference) + this.weapon.minDamage);
            var damage = Math.round(generatedRoll);
            return damage;
        }

        this.reduceDamage = function(damage){
            var reducedDamage = Math.round(damage * this.armor.armorValue);
            return reducedDamage;
        }

        this.takeDamage = function(damage){
            this.hitPoints -= damage;
        }

        this.isAlive = function(){
            if(this.hitPoints > 0){
                return true;
            }

            else {
                return false;
            }
        }

        this.rest = function(){
            this.hitPoints = this.maxHitPoints;
        }

        this.levelUp = function(){
            this.level++;

            if(this.campingSupplies < 3){
                this.campingSupplies = 3;
            }

            if(this.profession === "Warrior"){
                this.strength = this.strength + 2;
                this.hitPoints = this.hitPoints + 5;
                this.maxHitPoints = this.maxHitPoints + 5;

                if((this.level % 2) === 1){
                    this.agility++;
                    this.mind++;
                    this.charisma++;
                }
            }

            else if(this.profession === "Thief"){
                this.agility = this.agility + 2;
                this.hitPoints = this.hitPoints + 3;
                this.maxHitPoints = this.maxHitPoints + 3;

                if((this.level % 2) === 1){
                    this.strength++;
                    this.mind++;
                    this.charisma++;
                }

            }

            else if(this.profession === "Mage"){
                this.mind = this.mind + 2;
                this.hitPoints = this.hitPoints + 2;
                this.maxHitPoints = this.maxHitPoints + 2;
                this.magicPoints = this.magicPoints + 5;
                this.maxMagicPoints = this.maxMagicPoints + 5;

                if((this.level % 2) === 1){
                    this.agility++;
                    this.strength++;
                    this.charisma++;
                }
                
            }

            else if(this.profession === "Paladin"){
                this.strength++;
                this.mind++;
                this.charisma++;
                this.hitPoints = this.hitPoints + 4;
                this.maxHitPoints = this.maxHitPoints + 4;
                this.magicPoints = this.magicPoints + 3;
                this.maxMagicPoints = this.maxMagicPoints + 3;

                if((this.level % 2) === 1){
                    this.agility++;
                }
            }

            else if(this.profession === "Bard"){
                this.agility++;
                this.mind++;
                this.charisma++;
                this.hitPoints = this.hitPoints + 3;
                this.maxHitPoints = this.maxHitPoints + 3;
                this.magicPoints = this.magicPoints + 3;
                this.maxMagicPoints = this.maxMagicPoints + 3;

                if((this.level % 2) === 1){
                    this.strength++;
                }
            }

            else{
                console.log("Something has gone wrong while increasing your stats.");
            }
        }
    }

    
}