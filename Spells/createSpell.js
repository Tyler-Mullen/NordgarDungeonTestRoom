module.exports = {
    createSpell: function(name, type, value, magicPointsCost, usableOutOfCombat){
        this.name = name;
        this.type = type;
        this.value = value;
        this.magicPointsCost = magicPointsCost;
        this.usableOutOfCombat = usableOutOfCombat
    }
}