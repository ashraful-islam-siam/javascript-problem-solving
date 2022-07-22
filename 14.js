let f0 = 0;
console.log(f0);

let f1 = 1;
console.log(f1);
for(let i = 2; i < 10; i++) {
    let fi = f1 + f0;

    f0 = f1;
    f1 = fi
}
console.log(f0);
console.log(f1);