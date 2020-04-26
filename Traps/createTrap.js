module.exports = {
    createTrap: function(type, disarmDifficulty, dodgeDifficulty, damage, disarmXp, dodgeXp){
        this.type = type;
        this.disarmDifficulty = disarmDifficulty;
        this.dodgeDifficulty = dodgeDifficulty;
        this.damage = damage;
        this.disarmXp = disarmXp;
        this.dodgeXp = dodgeXp;
    }
}