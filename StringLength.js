function solve(...params){
    let sum = params.reduce((a, b) => a + b.length, 0);
    let averige = Math.floor(sum / params.length)

    return [sum,averige]
}

console.log(solve('chocolate', 'ice cream', 'cake').join("\n"))