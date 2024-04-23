function cloneArray(arr) {
    return arr.slice(0);
}

let originalArray = [1, 2, 3, 4, 5];
let clonedArray = cloneArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Cloned Array:", clonedArray);