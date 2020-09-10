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
        this.gold = 150;
        this.weapon = weapons.none;
        this.armor = armors.none;
        this.thievesTools = 0;
        this.campingSupplies = 0;
        this.isPoisoned = false;

        this.healingPotionCount = 0;
        this.manaPotionCount = 0;
        this.antidoteCount = 0;

        this.spells = getSpells(this.profession);
        this.outOfCombatSpells = getOutOfCombatSpells(this.profession);        
        
        this.printStats = function(){
            console.log("");
            if(this.isPoisoned === true){
                console.log(" Name: " + this.name + "\n Race: " + this.race + "\n Profession: " + this.profession + "\n Poisoned");
            }

            else{
                console.log(" Name: " + this.name + "\n Race: " + this.race + "\n Profession: " + 
            this.profession);
            }

            console.log("");
            console.log(" Strength: " + this.strength + "\n Agility: " + this.agility + "\n Mind: "
            + this.mind + "\n Charisma: " + this.charisma);
            console.log("");
            console.log(" Level: " + this.level + "\n HP: " + this.hitPoints + "/" + this.maxHitPoints + "\n MP: " +
            this.magicPoints + "/" + this.maxMagicPoints);
            console.log(" Weapon: " + this.weapon.name + "\n Armor: " + this.armor.name);
            console.log("");
            console.log(" Gold: " + this.gold + "\n XP: " + this.xp);
            console.log("");
            console.log(" Spells: " + this.spells);
            console.log("");

            console.log(" Thieves' Tools: " + this.thievesTools);
            console.log(" Camping Supplies: " + this.campingSupplies);
            console.log(" Healing Potions: " + this.healingPotionCount);
            console.log(" Mana Potions: " + this.manaPotionCount);
            console.log(" Antidotes: " + this.antidoteCount);
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

        this.gainHealth = function(damage){
            var attemptedRestore = this.hitPoints + damage;

            if(attemptedRestore > this.maxHitPoints){
                this.hitPoints = this.maxHitPoints;
            }

            else{
                this.hitPoints = attemptedRestore;
            }
        }

        this.gainMana = function(magicValue){
            var attemptedRestore = this.hitPoints + magicValue;

            if(attemptedRestore > this.maxMagicPoints){
                this.magicPoints = this.maxMagicPoints;
            }

            else{
                this.magicPoints = attemptedRestore;
            }
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
            var attemptedHealthRestore = Math.round((Math.random() * (this.maxHitPoints / 2)) + 3);
            this.gainHealth(attemptedHealthRestore);

            if(this.profession === "Mage" || "Paladin" || "Bard"){
                var attemptedMagicRestore = (Math.random() * (this.maxMagicPoints / 2)) + 3;
                this.gainHealth(attemptedMagicRestore);
            }
        }

        this.drinkPotion = function(potionType, value){
            if(potionType === "Healing"){
                var preHealingHitPoints = this.hitPoints;
                this.gainHealth(value);
                var healedPoints = this.hitPoints - preHealingHitPoints;

                console.log("You have gained back " + healedPoints + " Hit Points");
                
                if(healedPoints > 0){
                    console.log("You feel refreshed");
                }

                else {
                    console.log("You Feel the Same");
                }
                this.healingPotionCount--;
            }

            else if(potionType === "Mana Restore"){
                var preHealingMagicPoints = this.magicPoints;
                this.gainMana(value);
                var healedPoints = this.magicPoints - preHealingMagicPoints;

                console.log("You have gained back " + healedPoints + " Hit Points");
                
                if(healedPoints > 0){
                    console.log("You feel refreshed");
                }

                else {
                    console.log("You Feel the Same");
                }
                this.manaPotionCount--;
            }

            else if(potionType === "Antidote"){
                var wasPoisoned = this.isPoisoned;
                this.isPoisoned = false;
                
                if(wasPoisoned === true){
                    console.log("You are no longer poisoned");
                }

                else{
                    console.log("You feel the same");
                }
                this.antidoteCount--;
            }

            else {
                console.log("Something has gone wrong while drinking this potion.");
            }
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

                if(this.level === 2){
                    this.spells.push("Haste");
                }

                if(this.level === 3){
                    this.spells.push("Vanish");
                    this.spells.push("Cure Poison");
                    this.outOfCombatSpells.push("Cure Poison");
                }

                if(this.level === 4){
                    this.spells.push("Ice Lance");
                    this.spells.push("Greater Healing");
                    this.outOfCombatSpells.push("Greater Healing");
                }

                if(this.level === 5){
                    this.spells.push("Blind");
                }

                if(this.level === 6){
                    this.spells.push("Death Ray");
                    this.spells.push("Stone Skin");
                    this.outOfCombatSpells.push("Stone Skin");
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

                if(this.level === 3){
                    this.spells.push("Cure Poison");
                    this.outOfCombatSpells.push("Cure Poison");
                }

                if(this.level === 4){
                    this.spells.push("Greater Healing");
                    this.outOfCombatSpells.push("Greater Healing");
                }

                if(this.level === 6){
                    this.spells.push("Stone Skin");
                    this.outOfCombatSpells.push("Stone Skin");
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

                if(this.level === 2){
                    this.spells.push("Haste");
                }

                if(this.level === 3){
                    this.spells.push("Vanish");
                }

                if(this.level === 4){
                    this.spells.push("Ice Lance");
                }

                if(this.level === 5){
                    this.spells.push("Blind");
                }

                if(this.level === 6){
                    this.spells.push("Death Ray");
                }
            }

            else{
                console.log("Something has gone wrong while increasing your stats.");
            }
        }
    }

    
}