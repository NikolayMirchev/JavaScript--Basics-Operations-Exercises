    const add = (x, y) => x+y;
    const addInverse = (x, y) => x + (1/y);
    const concat = (x, y) => x + y.toString();

    function solve(...params) {
        return[
            params.reduce(add, 0),
            params.reduce(addInverse, 0),
            params.reduce(concat, "")
        ].join("\n");
        
    }
console.log(solve(1,2,3))

/*
Aggregate Elements
Write a program that performs different operations on an array of elements. Implement the following operations:
•	Sum(ai) - calculates the sum all elements from the input array
•	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
•	Concat(ai) - concatenates the string representations of all elements from the array
The input comes as an array of number elements.
The output should be printed on the console on a new line for each of the operations.

Input				Output
[1, 2, 3]
Output	
6
1.8333
123	

Input
[2, 4, 8, 16]	
Output
30
0.9375
24816
*/