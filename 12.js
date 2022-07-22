function getPositives(ar) {
    let ar2 = []

    for(let i = 0; i < ar.length; i++) {
        let el = arr[i]
        if(el >= 0) {
            ar2.push(ar[i])
        } 
    }
    return ar2
}
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr2 = getPositives(arr)
console.log(arr2)