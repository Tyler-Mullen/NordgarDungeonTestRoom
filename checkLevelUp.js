module.exports = {
    checkIfLeveled: function(hero){
        switch(hero.level){
            case 1:
                if(hero.xp >= 100){
                    return true;
                }

                else{
                    return false;
                }
            
            case 2:
                if(hero.xp >= 250){
                    return true;
                }

                else{
                    return false;
                }

            case 3:
                if(hero.xp >= 475){
                    return true;
                }

                else{
                    return false;
                }

            case 4: 

                if(hero.xp >= 800){
                    return true;
                }

                else{
                    return false;
                }

            default:
                return false;
        }
    }
}