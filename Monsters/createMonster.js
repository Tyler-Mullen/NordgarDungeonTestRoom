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

        this.attack = function(hero){
            var monsterRoll = ((Math.random() * 12) + 1);
            var heroRoll = ((Math.random() * 12) + 1);

            var monsterAttack = monsterRoll + this.strength;
            var heroAttack = heroRoll + enemy.agility;

            if(monsterAttack >= heroAttack){
                console.log(" The " + this.name + "'s attack hit.");
            }

            else{
                console.log(" The " + this.name + "'s attack missed.");
            }
        }

        this.takeDamage = function(damage){
            this.hitPoints -= damage;
        }
    }
}