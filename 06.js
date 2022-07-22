function printIn(v) {
    console.log(v)
}

//  Calculate 10!

let prod = 1;
for(let i = 1; i <= 10; i++) {
    prod *= i
}

printIn(prod);

module.exports = printIn