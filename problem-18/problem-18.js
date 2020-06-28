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