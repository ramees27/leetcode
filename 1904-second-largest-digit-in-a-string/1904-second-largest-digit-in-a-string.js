/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    s=s.split("")
    numarray=s.filter(num => num >= '0' && num <= '9')
    numbers =numarray.map(Number)
    sort=numbers.sort((a,b)=>b-a)
    unique=[...new Set(sort)]
    if(unique.length>1){
        return unique[1]
    }
    else{
        return -1
    }
    
};