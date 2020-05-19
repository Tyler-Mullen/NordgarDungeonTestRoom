module.exports = {
    createMonster: function (name, strength, agility, mind, armValue, averageGold, xp) {
        this.name = name;
        this.strength = strength;
        this.agility = agility;
        this.mind = mind;
        this.averageGold = averageGold;
        this.minGold = Math.round(this.averageGold * 0.5);
        this.maxGold = Math.round(this.averageGold * 1.5);
        this.xp = xp;

        this.hitPoints = strength * 2;
        this.maxHitPoints = strength * 2;
        this.minDamage = Math.round(this.strength * 0.5);
        this.maxDamage = Math.round(this.strength * 1.2);
        this.armorValue = armValue;

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

        this.reduceDamage = function(damage){
            var reducedDamage = Math.round(damage * this.armorValue);
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

        this.generateRandomGold = function(){
            var difference = this.maxGold - this.minGold;
            var generatedRoll = ((Math.random() * difference) + this.minGold);
            var gold = Math.round(generatedRoll);
            return gold;
        }
    }
}