module.exports = {
    createPotion: function (name, baseCost, effect) {
        this.name = name;
        this.baseCost = baseCost;
        this.effect = function(){
            effect;
        }
    }
}