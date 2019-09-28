function solve(a,b, operator) {
    let result;
    switch (operator) {
        case "+": result = a + b;            
            break;
        case "-": result = a - b;            
            break;
        case "*": result = a * b;            
            break;
        case "/": result = a / b;            
            break;
        case "%": result = a % b;            
            break;
        case "**": result = a ** b;            
            break;
        default:
            break;
    }
    console.log(result)
}
solve(2,3,'*')