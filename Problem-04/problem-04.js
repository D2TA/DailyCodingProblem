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
console.log(SubtractArray);
console.log(Output);