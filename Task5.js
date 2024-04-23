function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

let exampleString = 'Web Development Tutorial';
let longestWord = findLongestWord(exampleString);
console.log(exampleString);
console.log(longestWord);