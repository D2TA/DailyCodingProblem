// JavaScript Array from() Method
    // This method takes a String and creates an Array
    // Syntax: array.from(object, mapFunction, thisValue)

var MappingCode = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
var Message = '111'
var DecodedArray = [];

for (i = 0; i <= Message.length; i++){
    MappingCode[Number(Message[i])]
        + 
    Message.slice(i+1,Message.length)
};

console.log(Message[0])
console.log(Message.slice(1,Message.length));