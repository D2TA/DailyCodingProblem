var initialArray = [1, 2, 3, 4, 5, 6];

function ArrayProduct(total, currentValue){
    return total*currentValue;
}

function ArrayDivisor(currentValue){
    return ArrayProductValue/currentValue;
}

// JavaScript Array Reduce() Method
    // This method reduces the array to a single value
    // Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
ArrayProductValue = initialArray.reduce(ArrayProduct);

// JavaScript Array map() Method
    // This method creates a new array with the results of calling a function for every array element
    // Syntax: array.map(function(currentValue, index, arr), thisValue)
ArrayOutput = initialArray.map(ArrayDivisor);

console.log(initialArray);
console.log(ArrayProductValue);
console.log(ArrayOutput);