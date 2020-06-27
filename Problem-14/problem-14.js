// Area of Circle is pi r^2
    // Equation of Circle is x^2 + y^2 = r^2
// A = pi * r^2
// pi = A / r^2
// pi = A / ( x^2 + y^2 )

var TrueValue = Math.floor(Math.PI*1000)/1000;

// For a fixed X value and Y value, we can incrementally increase A to estimate pi
var x = 1;
var y = 1;
var iterationCount = 1;
var A = 0;
var estimateValue = 0;

while (estimateValue <= TrueValue){
    A = A + 0.001;
    estimateValue = A / ( (x^2) + (y^2) );
    estimateValue = Math.floor( estimateValue * 1000) /1000;
    iterationCount ++
}

console.log(TrueValue);
console.log(estimateValue);
console.log(iterationCount);