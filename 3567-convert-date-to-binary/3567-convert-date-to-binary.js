/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let [year,month,day] = date.split('-');

    let binaryYear = parseInt(year).toString(2)
    let binaryMonth = parseInt(month).toString(2)
    let binaryDay = parseInt(day).toString(2)

    return `${binaryYear}-${binaryMonth}-${binaryDay}`
};