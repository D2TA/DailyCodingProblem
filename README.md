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
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-11/problem-11.md)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-11/problem-11.js)
- This solution uses Node.js
```javascript
    const fs = require('fs');
    const http = require('http');
    
    var WordSuggestion = 'abandon';
    // Step 1: Obtain Word Array
        // JavaScript Function readFileSync(): 
    var WordList = fs.readFileSync('C:/Users/David Ta/Desktop/Repository/DailyCodingProblem/Problem-11/words_alpha.txt').toString().split("\r\n");
        // JavaScript Array forEach() Method
        // This method that performs a function for each item in the array
        // Sytanx: array.forEach(function(currentValue, index, arr), thisValue)
    WordList.forEach(function regExReplace(item, index, arr){
        arr[index] = item.replace('\r','')
    });
        // Step 2: Build Suggestion
    function SuggestionArray(item){
        return item.includes(WordSuggestion)
    };
    function HTMLSuggest(Word,WordArray){
        WordArrayFilter = WordArray.filter(SuggestionArray);
        SuggestionArray = WordArrayFilter.slice(0,9);
        return SuggestionArray.toString();
    };
    
    console.log(HTMLSuggest(WordSuggestion,WordList));    
```

## Problem 12:
There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript

```

## Problem 13:
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript

```

## Problem 14:
The area of a circle is defined as r^2. Estimate \pi to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x^2 + y^2 = r^2.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript
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
```

## Problem 15:
Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript

```

## Problem 16:
You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log 

get_last(i): gets the ith last element from the log. 

i is guaranteed to be smaller than or equal to N. 

You should be as efficient with time and space as possible.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript
// Order Log will be our array/database of order details
var OrderLog = [];
var Letters  = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

const t0 = new Date().getTime();

//      | OrderNum | RecordDate | ProductID | CustomerID | OrderStatus
    // Ideally, CustomerID will be linked to a Customer Table
    // Ideally, ProductID will be linked to a Product Catelog Table
    // Ideally, OrderStatus will be Active, Shipped, Recieved, Cancelled and Issue
        // Completed indicates
        // Cancelled indicates orders that are cancelled
        // Active indicates that the order is still being processed

function record(ProductID, CustomerID){
    var recordDate = new Date();
    var OrderID = OrderLog.length;
    // Format of the Date is ISO 8601 Extended Format:
        // `YYYY-MM-DDTHH:mm:ss.sssZ`
            // T: Indicates the start of time
            // Z: If Z is present, then the date will be set to UTC, if not then it is Local Time
    OrderLog.push([OrderID,recordDate, ProductID, CustomerID]);
};

function get_last(i){
    var OrderID = OrderLog.length;
    if (i > OrderID){
        console.log('Please try again, with another value. There are : ' + OrderID.toString() + ' Orders in Total.')
    } else {
        console.log(OrderLog[OrderLog.length - i]);
    };
};

function endExecution(StartTime){
    const EndTime = new Date().getTime();
    console.log('Time to Execute took ' + ( (EndTime - StartTime)/1000 ).toString() + ' milliseconds.');
};




for (i = 0; i < 1000000; i++){
    var randomProductNum = Math.floor(Math.random() *100);
    if (randomProductNum < 100){
        var randomProductString = '0' + randomProductNum.toString();
    } else {
        var randomProductString = randomProductNum.toString();
    };
    var randomCustomerNum = Math.floor(Math.random() *10000);
    var InsertProduct = Letters[Math.floor(Math.random() * (Letters.length - 0) + 0)] + randomProductString;
    var InsertCustomer = 'CUST' + randomCustomerNum.toString();
    record(InsertProduct, InsertCustomer);
}

    // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    // 1000 ms = 1 second.
    // Syntax: setTimeout(function, milliseconds, param1, param2, ...)

setTimeout(function() {
    record('K102','CUST2992')
    get_last(957212)
    endExecution(t0)
},100);

```

## Problem 17:
Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript

```

## Problem 18:
Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

10 = max(10, 5, 2)

7 = max(5, 2, 7)

8 = max(2, 7, 8)

8 = max(7, 8, 7)

Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript
var array = [10, 5, 2, 7, 8, 8];
var k = 4;
var inputArray = []

function maxArray(array, kValue){
    var OutputArray = [];
    var NumIteration = array.length - kValue + 1;
    if (kValue > array.length){
        return console.log('error, new k');
    } else {
        for (i = 0; i < NumIteration; i++){
            var ChoiceArray = [parseInt(array[i]), parseInt(array[i+1]), parseInt(array[i+2])];
            console.log(ChoiceArray);
            ChoiceArray = ChoiceArray.map( item => {
                if (item >= 0 || item < 0){
                    return item
                } else {
                    return 0
                };
            } );
            OutputArray.push(Math.max(...ChoiceArray) );
        };
        return OutputArray;
    }
}

Output = maxArray(array, k)
// console.log(Output);

function InsertFunction(){
    var value = parseInt(document.getElementById("arrayInsert").value);
    var subArrayLen = document.getElementById("kValue").value;
    if (subArrayLen === ""){
        var subArrayLen = 1;
        document.getElementById('SubArrayValue').innerHTML = 1;
    } else {
        document.getElementById('SubArrayValue').innerHTML = subArrayLen.toString();
    };

    inputArray.push(value);
    document.getElementById('InputArrayShow').innerHTML = inputArray.toString();

    Output = maxArray(inputArray, subArrayLen);

    document.getElementById('OutputArrayShow').innerHTML = Output.toString();
}
```

## Problem 19:
A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript
```

## Problem 20:
Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript
var NodeString1 = '3 -> 7 -> 8 -> 10'
var NodeString2 = '99 -> 1 -> 8 -> 10'

function StringArray(NodeString){
    CommaVector = [];
    NodeArray = [];
    
    // Perform a global replacement: is to include / /g
    NodeString = NodeString.replace(/ -> /g,',');
    
    // Fron Node String, identify comma placement
    for (i=0; i <= NodeString.length - 1; i++){

        if (NodeString[i] === ','){
            CommaVector.push(i)
        };
    };
    // Given comma placement, output string values to array
    NodeArray.push(NodeString.slice(0, CommaVector[0]))
    for (i = 0; i <= CommaVector.length - 1; i ++){
        NodeArray.push( NodeString.slice( CommaVector[i]+1, CommaVector[i+1] ) )
    };
    return NodeArray;
};

function ValueArrayCheck1(item) {
    if (Array2.includes(item)){
        console.log('There is a Node Match from Array1 to Array2. Node Value: ' + item.toString())
    }
};

function ValueArrayCheck2(item) {
    if (Array1.includes(item)){
        console.log('There is a Node Match from Array2 to Array1. Node Value: ' + item.toString())
    }
};
Array1 = StringArray(NodeString1);
Array2 = StringArray(NodeString2);

console.log('Array 1 is: ')
console.log(Array1)
console.log('Array 2 is: ')
console.log(Array2)

Array1.forEach(ValueArrayCheck1);
Array2.forEach(ValueArrayCheck2);
```

## Problem 21:
Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

**Solution:**
- [Thought Process](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.md)
- [Solution Page](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09index.html)
- [Code](https://d2ta.github.io/DailyCodingProblem/Problem-09/problem-09.js)

```javascript
```
