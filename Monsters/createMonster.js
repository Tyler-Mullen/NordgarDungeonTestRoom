module.exports = {
    createMonster: function (name, strength, agility, mind, charisma, minGold, maxGold, xp) {
        this.name = name;
        this.strength = strength;
        this.agility = agility;
        this.mind = mind;
        this.charisma = charisma;
        this.minGold = minGold;
        this.maxGold = maxGold;
        this.xp = xp;

        this.hitPoints = strength * 2;
        this.maxHitPoints = strength * 2;
        this.minDamage = Math.round(this.strength);
        this.maxDamage = Math.round(this.strength);
        this.minArmorValue = 0;
        this.maxArmorValue = 0;

        this.attack = function(hero){
            var monsterRoll = Math.round((Math.random() * 12) + 1);
            var heroRoll = Math.round((Math.random() * 12) + 1);

            var monsterAttack = monsterRoll + this.strength;
            var heroAttack = heroRoll + hero.agility;

            console.log(" The " + this.name + " rolled a " + monsterAttack + " to hit.");
            console.log(" " + hero.name + " rolled a " + heroAttack + " to dodge.");

            if(monsterAttack >= heroAttack){
                return true
            }

            else{
                return false;
            }
        }

        this.dealDamage = function(){
            var difference = this.maxDamage - this.minDamage
            var generatedRoll = ((Math.random() * difference) + this.minDamage);
            var damage = Math.round(generatedRoll);
            return damage;
        }

        this.reduceDamage = function(){
            var difference = this.maxArmorValue - this.minArmorValue;
            var generatedRoll = ((Math.random() * difference) + this.minArmorValue);
            var reduction = Math.round(generatedRoll);
            return reduction;
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

        this.generateRandomGold = function(){
            var difference = this.maxGold - this.minGold;
            var generatedRoll = ((Math.random() * difference) + this.minGold);
            var gold = Math.round(generatedRoll);
            return gold;
        }
    }
}