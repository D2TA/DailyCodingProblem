var bracketString = '[](){}';
var bracketArray = Array.from(bracketString);
var bracketTypeArray = [];

for (i=0; i <= (bracketString.length/2) - 1; i++){
    bracketTypeArray.push(0,1);
};

var input = '([{[()]}])'
var input2 = '(([)'

function FormatCheck(input){
    var inputArray = Array.from(input);
    for (i = inputArray.length/2; i >= 1; i --){
        LeftBracket = inputArray[i - 1];
        RightBracket = inputArray[inputArray.length - i + 1 - 1];
        ExpectedLeftBracket = bracketArray[bracketArray.indexOf(RightBracket) - 1]
        ExpectedRightBracket = bracketArray[bracketArray.indexOf(LeftBracket) + 1]
    
    
        if (bracketArray.indexOf(RightBracket)%2 != 1){
                // The Left Bracket's value should have an index of even
            console.log('It is not well formatted');
            return false
        } else if (bracketArray.indexOf(LeftBracket)%2 != 0){
                // The Right Bracket's value should have an index of odd
            console.log('It is not well formated');
            return false
        } else if (LeftBracket === ExpectedLeftBracket && RightBracket === ExpectedRightBracket ){
            console.log('It is well formatted: ' + input);
            return true
        } else {
            return false
        };
    };
};

FormatCheck(input)
FormatCheck(input2)