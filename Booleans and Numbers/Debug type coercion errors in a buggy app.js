//Buggy code

let firstResult = 5 + "10";
console.log(`5 + 10 = ${firstResult}`);

let secondResult = "Eight" - 5;
console.log(`8 - 5 = ${secondResult}`);

let thirdResult = true + 5;
console.log(`1 + 5 = ${thirdResult}`);

let fourthResult = false + 8;
console.log(`0 + 8 = ${fourthResult}`);

let fifthResult = "10" * 2;
console.log(`10 * 2 = ${fifthResult}`);

let sixthResult = null + 22;
console.log(`0 + 22 = ${sixthResult}`);


/* output
5 + 10 = 510
8 - 5 = NaN
1 + 5 = 6
0 + 8 = 8
10 * 2 = 20
0 + 22 = 22
*/

//Debug 
firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`);

secondResult = 8 - 5;
console.log(`8 - 5 = ${secondResult}`);

thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);

/*Output
5 + 10 = 15
8 - 5 = 3
1 + 5 = 6
0 + 8 = 8
10 * 2 = 20
0 + 22 = 22
*/