/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    string1="";
    string2="";
    for(let i=0;i<word1.length;i++){
        string1+=word1[i]
    }
     for(let i=0;i<word2.length;i++){
        string2+=word2[i]
    }
    return string1===string2
};