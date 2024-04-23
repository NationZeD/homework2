function mostFrequentItem(arr) {
    let frequency = {};
    let maxFrequency = 0;
    let mostFrequentItem;

    arr.forEach(function(item) {
        if (!frequency[item]) {
            frequency[item] = 1;
        } else {
            frequency[item]++;
        }

        if (frequency[item] > maxFrequency) {
            maxFrequency = frequency[item];
            mostFrequentItem = item;
        }
    });

    return `${mostFrequentItem} ( ${maxFrequency} times )`;
}

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let output = mostFrequentItem(arr1);
console.log(arr1);
console.log(output);