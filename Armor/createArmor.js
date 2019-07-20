module.exports = {
    createArmor: function (minDefense, maxDefense, usableByWarrior, usableByThief, 
        usableByMage, usableByPaladin, usableByBard){
        this.minDefense = minDefense;
        this.maxDefense = maxDefense;
        this.usableByWarrior = usableByWarrior;
        this.usableByThief = usableByThief;
        this.usableByMage = usableByMage;
        this.usableByPaladin = usableByPaladin;
        this.usableByBard = usableByBard;
    }
}