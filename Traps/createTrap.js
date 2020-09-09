module.exports = {
    createTrap: function(type, difficulty, damage, trapXp, isPoisonous){
        this.type = type;
        this.difficulty = difficulty;
        this.damage = damage;
        this.trapXp = trapXp;
        this.isPoinsonious = isPoisonous;
    }
}