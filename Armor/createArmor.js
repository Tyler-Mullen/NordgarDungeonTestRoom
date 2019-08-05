module.exports = {
    createArmor: function (name, minDefense, maxDefense, baseCost, usableByWarrior,
         usableByThief, usableByMage, usableByPaladin, usableByBard){
        
        this.name = name;
        this.minDefense = minDefense;
        this.maxDefense = maxDefense;
        this.baseCost = baseCost;
        this.usableByWarrior = usableByWarrior;
        this.usableByThief = usableByThief;
        this.usableByMage = usableByMage;
        this.usableByPaladin = usableByPaladin;
        this.usableByBard = usableByBard;
    }
}