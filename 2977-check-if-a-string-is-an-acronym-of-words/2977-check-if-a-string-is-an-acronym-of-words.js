/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let word=[];
    for(let i=0;i<words.length;i++){
        word.push(words[i][0])
    }
    return word.join("")==s
};