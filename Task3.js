function insertDash(num) {
    let numStr = num.toString();
    let result = numStr[0];

    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i - 1] % 2 === 0 && numStr[i] % 2 === 0) {
            result += '-' + numStr[i];
        } else {
            result += numStr[i];
        }
    }

    return result;
}

let inputNumber = 25468;
let output = insertDash(inputNumber);
console.log("Input Number:", inputNumber);
console.log("Output:", output);