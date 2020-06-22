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