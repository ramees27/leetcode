/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
     let array=s.split(' ').sort((a,b)=>a[a.length-1]-b[b.length-1])
    let result=array.join().replace(/\d+/g,'')
    return output=result.split(',').join(' ')
};