function average(ar) {
    let n = ar.length;
    let sum = 0;

    for(let i = 0; i < n; i++) {
        sum += ar[i]
    }
    return sum / n
}

console.log(average([1, 3, 9, 15, 90]))
