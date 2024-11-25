/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word===word.toLowerCase()|| word.toUpperCase() == word){
        return true;
        
        }
    else if((word===word[0]+word.slice(1).toLowerCase())){  
        return true;
    }  
    else{
      return false
    }
    
    
};