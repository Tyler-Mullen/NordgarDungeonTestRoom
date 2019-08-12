module.exports = {
    createArmor: function (name, armorValue, baseCost, usableByWarrior,
         usableByThief, usableByMage, usableByPaladin, usableByBard){
        
        this.name = name;
        this.armorValue = armorValue;
        this.baseCost = baseCost;
        this.usableByWarrior = usableByWarrior;
        this.usableByThief = usableByThief;
        this.usableByMage = usableByMage;
        this.usableByPaladin = usableByPaladin;
        this.usableByBard = usableByBard;
    }
}