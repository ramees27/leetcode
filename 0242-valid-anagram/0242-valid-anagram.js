/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arr=s.split("").sort().join("")
    let arr2=t.split("").sort().join("")
   return(arr===arr2)
    
};