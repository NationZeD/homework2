function swapFirstAndLast(str) {
    if (str.length <= 1) {
        return str;
    } else {
        let firstChar = str[0];
        let lastChar = str[str.length - 1];
        let middle = str.substring(1, str.length - 1);
        return lastChar + middle + firstChar;
    }
}

let originalString = "hello";
let swappedString = swapFirstAndLast(originalString);
console.log("Original String:", originalString);
console.log("Swapped String:", swappedString);