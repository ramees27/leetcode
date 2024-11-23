/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    arr1=s.split("").sort()
    arr2=t.split("").sort()
    for(i=0;i<t.length;i++)
     if(arr1[i]!==arr2[i]){
       return  arr2[i];
    }
    return "";
};