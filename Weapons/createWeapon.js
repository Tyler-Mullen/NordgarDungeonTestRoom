module.exports = {
    createWeapon: function (name, minDamage, maxDamage, baseCost, usableByWarrior,
         usableByThief, usableByMage, usableByPaladin, usableByBard) {
            this.name = name;
            this.minDamage = minDamage;
            this.maxDamage = maxDamage;
            this.baseCost = baseCost;
            this.usableByWarrior = usableByWarrior;
            this.usableByThief = usableByThief;
            this.usableByMage = usableByMage;
            this.usableByPaladin = usableByPaladin;
            this.usableByBard = usableByBard;
    }
}