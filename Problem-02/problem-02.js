var initialArray = [1, 2, 3, 4, 5];

var k = 3;

function ArraySubtract(currentValue){
    return k - currentValue;
}

function ArrayFind(currentValue){
    // JavaScript Array includes() Method
    // This Method checks if a value is in the Array
    // Syntax: array.includes(element, start)
    return initialArray.includes(currentValue);
}

function ArraySize(Array){
    if (Array.length > 1){
        return true;
    } else {
        return false;
    }
}

// JavaScript Array map() Method
    // This method creates a new array with the results of calling a function for every array element
    // Syntax: array.map(function(currentValue, index, arr), thisValue)
ArraySubtractvalue = initialArray.map(ArraySubtract);

// JavaScript Array find() Method
    // This method filters through each value to check whether or not and outputs the checked value
    // Syntax: array.find(function(currentValue, index, arr),thisValue)
ArrayOutput = ArraySubtractvalue.filter(ArrayFind);

Output = ArraySize(ArrayOutput);

console.log(initialArray);
console.log(k);
console.log(ArraySubtractvalue);
console.log(ArrayOutput);
console.log(Output);