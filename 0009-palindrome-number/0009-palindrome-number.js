/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let string=x.toString()
    let reverce=string.split("").reverse().join("")
  return reverce===string;
}