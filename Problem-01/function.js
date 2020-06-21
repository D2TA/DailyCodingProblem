var inputArray = [];

function ArrayProduct(total, currentValue){
    return total*currentValue;
}

function ArrayDivisor(currentValue){
    return ArrayProductValue/currentValue;
}

function InsertFunction(value){
    var value = document.getElementById("arrayInsert").value;
    inputArray.push(value);
    console.log(inputArray);
    document.getElementById("inputArrayValue").innerHTML = inputArray.toString();
    ArrayProductValue = inputArray.reduce(ArrayProduct);
    document.getElementById("ArrayProductValue").innerHTML = ArrayProductValue;
    document.getElementById("OutputArrayValue").innerHTML = inputArray.map(ArrayDivisor);
}