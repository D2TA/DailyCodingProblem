# DailyCodingProblem

Below are JavaScript written. One problem at minimum, a day. This Repository will contain answers, documentation and thoughts/methodology. 

Some solutions may contain their own visualization page for generalized solutions and implementation.

## Problem #1:
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-01/problem-01.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-01/problem-01index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-01/problem-01.js)

```javascript
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
```

## Problem #2:
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For Example: given [10, 15, 3, 7] and k of 17, return true since 10+ 7 is 17.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-02/problem-02.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-02/problem-02index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-02/problem-02.js)

```javascript
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
```

## Problem #3:
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-03/problem-03.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-03/problem-03index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-03/problem-03.js)

```javascript
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
```
