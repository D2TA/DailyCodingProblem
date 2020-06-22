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

N/A

```

## Problem #4:
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-04/problem-04.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-04/problem-04index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-04/problem-04.js)

```javascript
var initialArray = [1, 5, 7, 20, 25];
var UniqueInitialArray = [];
var SubtractArray = [];
var k = 3;

// This function builds a unique array from another array (regardless of duplicates, doesn't have to be sorted at all)
function UniqueExport(item){
    // JavaScript Array includes() Method
    // This method checks if an array includes the item
    // Sytanx: array.includes(element, start)
    if (!(UniqueInitialArray.includes(item))){
        UniqueInitialArray.push(item);
    }
};

function ArraySubtract(item, index){
    if (index === 0){
        return SubtractArray.push(1);
    } else {
        return SubtractArray.push(item - UniqueInitialArray[index - 1]);
    }
};

    // JavaScript Array sort() Method
    // This Method sorts alphabetic or numeric
    // Syntax: array.sort(compareFunction)
initialArray.sort(function (a, b){return a - b;});
initialArray.forEach(UniqueExport);
UniqueInitialArray.sort(function (a, b){return a - b;});
UniqueInitialArray.forEach(ArraySubtract);
    // Use ... for an array in Math Methods
var MinValue = Math.min(...SubtractArray);
var MinValueIndex = SubtractArray.lastIndexOf(MinValue);

var SecondMinValue = Math.min.apply(null, SubtractArray.filter(n => n != Math.min(...SubtractArray) ));
var SecondMinIndex = SubtractArray.lastIndexOf(SecondMinValue)

Method1 = UniqueInitialArray[MinValueIndex] + 1;
Method2 = UniqueInitialArray[SecondMinIndex -1] + 1;

Output = Math.min(Method1, Method2);

console.log(UniqueInitialArray);
console.log(Output);
```

## Problem 5:
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
Given this implementation of cons:
def cons(a, b):
    return lambda f : f(a, b)
Implement car and cdr.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05.js)

```javascript

N/A

```

## Problem 6:
An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05.js)

```javascript

N/A

```

## Problem 7:
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05.js)

```javascript

N/A

```

## Problem #8:
A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-05/problem-05.js)

```javascript

N/A

```

## Problem #9: 
Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 8] should return 12, since we pick 4 and 8. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript
var initialArray = [5, 1, 1, 5];
var sumArray = [];

function OtherArray(item,index,A){
    if (A != index){
        PivotArray.push(item);
    }
    return PivotArray
}

function AddFunction(item, index){
    var A = index;
    var PivotArray = [];
    initialArray.forEach( function OtherArray(item, index){
        if ( (A != index) && (A+1 != index) && (A-1 != index) ){
            PivotArray.push(item);
        }
    });
    var PivotValue = PivotArray.entries();

    for (x of PivotArray){
        sumArray.push(x + item);
    };
};

initialArray.forEach(AddFunction)

sumArray = Array.from(new Set(sumArray))
OutputValue = Math.max(...sumArray)
console.log(OutputValue)
```

## Problem 10:
Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript
NA
```

## Problem 11:
Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript

```
