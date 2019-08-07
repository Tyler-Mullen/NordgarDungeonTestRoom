module.exports = {
    checkCompatibility: function(item, hero){
        switch(hero.profession){
            case "Warrior":
                if(item.usableByWarrior === true){
                    return true;
                }

                else{
                    return false;
                }
            break;

            case "Thief":
                if(item.usableByThief === true){
                    return true;
                }
    
                else{
                    return false;
                }
            break;

            case "Mage":
                if(item.usableByMage === true){
                    return true;
                }
        
                else{
                    return false;
                }
            break;

            case "Paladin":
                if(item.usableByPaladin === true){
                    return true;
                }
        
                else{
                  return false;
                }
            break;

            case "Bard":
                if(item.usableByBard === true){
                   return true;
                }
            
               else{
                  return false;
                }
            break;

            default:
            return false;
        }
    }
}