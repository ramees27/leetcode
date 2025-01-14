/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count=0;
    
    if(!s.includes(letter)){
       return 0;
    }
    else{
        let arr1=s.split("")
        for(let i=0;i<s.length;i++){
            if(arr1[i]==letter){
                count++
            }
          
        }
    }
      return Math.floor(count/s.length*100)
};