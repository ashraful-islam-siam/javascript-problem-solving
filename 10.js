// Calculate the sum of numbers in an array of numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

let s = sumArray(nums)
console.log(s)