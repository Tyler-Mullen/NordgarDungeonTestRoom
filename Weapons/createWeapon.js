module.exports = {
    createWeapon: function (minDamage, maxDamage, baseCost, usableByWarrior, usableByThief, 
        usableByMage, usableByPaladin, usableByBard) {
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