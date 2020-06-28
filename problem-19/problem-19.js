var NumHouses = 3;
var kColors = 2;
var ColorVector = [];
var HouseMatrix = [];

// Building an Array of Possible K colors (encoded numerically)
for (i = 0; i <= kColors - 1; i++){
    ColorVector.push(i);
};

// Building a N x K Matrix
for (i = 0; i <= NumHouses - 1; i++){
    HouseMatrix.push(ColorVector);
};
console.log(HouseMatrix);

// Focus on all rows except for Row 1: Row 1 is the base
MinMatrix = [];
MinMatrix.push(HouseMatrix[0]);
console.log(MinMatrix)

for (i = 1; i <= HouseMatrix.length - 1; i ++){
    AboveRow = HouseMatrix[i - 1]
    RowVector = HouseMatrix[i]
    for (j = 0; j <= RowVector.length - 1; j ++){
        // House Above
        if (RowVector[j] == AboveRow[j]){
            RowVector[j] = 5
        };

    };
    MinMatrix.push(RowVector);
};

console.log('Output is:')
console.log(MinMatrix)

// 1 0 1    // 0 1 
// 0 1 0    // 0 1 
// 1 0 1


// 0 1 2    // 0 1 2
// 1 2 0    // 2 0 1
// 2 0 1    // 1 2 0