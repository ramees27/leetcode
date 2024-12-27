/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
 let first=new Date(date1)
  let second=new Date(date2)
 let diff=Math.abs(first-second)
 return diff/(1000*60*60*24)
};