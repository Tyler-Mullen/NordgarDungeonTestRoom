/*
The formula for XP need to reach the next level is

(currentLevel * 150) + (((currentLevel - 1) * (currentLevel - 1)) * 60)
*/

module.exports = {
    checkIfLeveled: function(hero){
        switch(hero.level){
            case 1:
                if(hero.xp >= 150){
                    return true;
                }

                else{
                    return false;
                }
            
            case 2:
                if(hero.xp >= 360){
                    return true;
                }

                else{
                    return false;
                }

            case 3:
                if(hero.xp >= 690){
                    return true;
                }

                else{
                    return false;
                }

            case 4: 
                if(hero.xp >= 1140){
                    return true;
                }

                else{
                    return false;
                }

            case 5: 
                if(hero.xp >= 1710){
                    return true;
                }

                else{
                    return false;
                }

            case 6: 
                if(hero.xp >= 2400){
                    return true;
                }
                else{
                    return false;
                }

            case 7: 
                if(hero.xp >= 3210){
                    return true;
                }
                else{
                    return false;
                }

            case 8: 
                if(hero.xp >= 4140){
                    return true;
                }
                else{
                    return false;
                }

            case 9: 
                if(hero.xp >= 5190){
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