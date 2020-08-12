var merchants = require("./merchants.js");

module.exports = {
    generateRandomMerchant: function(){
        var randomMerchantRoll = Math.round((Math.random() * 100) + 1);

        if(randomMerchantRoll < 21){
            return merchants.runar;
        }

        else if(randomMerchantRoll < 41){
            return merchants.solveig;
        }

        else if(randomMerchantRoll < 61){
           return merchants.ragnheidr;
        }

        else if(randomMerchantRoll < 81){
            return merchants.snorri;
        }

        else{
            return merchants.njord;
        }
    }
}