function solve(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    // first output
    x1 >= y1 && x1 <= y2
    if ((x1 >= y1 && x1 <= y2) && (y1 >= x1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    //second output
    if(x2 >= 0 && y2 >= 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    
    //third output
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
}

solve([3, 0, 0, 4]);