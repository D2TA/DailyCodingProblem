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