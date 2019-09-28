function solve(a,b) {
    let num1 = Number(a);
    let num2 = Number(b);
    let sum = 0;
    for (let currentNum = num1; currentNum <= num2; currentNum++) {
        sum += currentNum;        
    }
    console.log(sum)
}
solve('1', '5');