// Loading an local text file into Enviroment
    // Since we are using Node.js

// JavaScript Package fs: File System
    // This method takes a String and creates an Array
    // https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
const fs = require('fs');
const http = require('http');
const readline  = require('readline');

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
    // JavaScript Array filter() Method
    // This method checks if an array includes the item through a function
    // Sytanx: array.filter(function(currentValue, index, arr), thisValue)
WordFilter = WordList.filter(SuggestionArray);
    // JavaScript Array slice() Method
    // This method selects elements, as a new array
    // Sytanx: array.slice(start, end)
WordFilterTop10 = WordFilter.slice(0,9);
console.log(WordFilterTop10);

function HTMLSuggest(Word,WordArray){
    WordArrayFilter = WordArray.filter(SuggestionArray);
    SuggestionArray = WordArrayFilter.slice(0,9);
    return SuggestionArray.toString();
};

console.log(HTMLSuggest(WordSuggestion,WordList));