function printIn(v) {
    console.log(v)
}

// Print all the multiplication tables with numbers from 1 to 10
for(let i = 1; i < 10; i++) {
    printable(i)
}

function printable(n) {
    for(let i = 1; i <= 10; i++) {
        let row = n + " * " + i + " = " + n*i
        printIn(row)
    }
}