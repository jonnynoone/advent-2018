const input = require('./input.js');

const inputStr = input.data;
const inputArr = inputStr.split('\n');
const frequencies = inputArr.map(item => item.trim());

let result = 0;
let resultsArr = [0];
let calibration;

while (typeof calibration === 'undefined') {
    frequencies.forEach(item => {
        let symbol = item[0];
        let number = parseInt(item.substr(1));
        
        if (symbol === '+') {
            result = result + number;
        } else if (symbol === '-') {
            result = result - number;
        }
    
        if (typeof calibration === 'undefined') {
            resultsArr.forEach(item => {
                if (result === item) {
                    calibration = result;
                }
            });
        }
    
        resultsArr.push(result);
    });
}

console.log(calibration);