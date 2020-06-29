var inputString = 'AAAAAAAAAAAAAAAAAAAAABBBCCDAA';
var inputStr = '4A3B2C1D2A';

// Encoding
function Encoding(inputString){
    var OutputArray = [ [0,1] ];    // [ [A,4],[B,3] ]

    console.log('Encoding the following: ' + inputString);
    for (i = 0; i < inputString.length; i++){
        if ( OutputArray[OutputArray.length - 1][0] == inputString[i] ){
            CharArray = OutputArray[OutputArray.length -1];
            CharArray[1] = CharArray[1] + 1;
            OutputArray[OutputArray.length - 1] = [inputString[i], CharArray[1] ]
        } else {
            OutputArray.push([inputString[i], 1]);
        };
    };
    
    OutputArray.shift();
    OutputString = OutputArray.reduce( function getSum(total , item){ return total + item[1] + item[0]; });
    OutputString = OutputString.replace(',','');
    
    console.log('Encoded String: ' + OutputString);
    return OutputString
};

Output = Encoding(inputString);