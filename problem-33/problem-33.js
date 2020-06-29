var inputArray = [2, 1, 5, 7, 2, 0, 5];

function RollingMedian(inputArray){
    for (i = 0; i <= inputArray.length -1; i++){
        ListArray = [];
        for (j = 0; j <= i; j++){
            ListArray.push(inputArray[j]);
        };
        ListArray.sort( function (a,b) {return a - b});
        console.log(ListArray);
    
        if (ListArray.length%2 == 0){
            MiddleIndex1 = Math.floor( (ListArray.length - 1)/2);
            MiddleIndex2 = MiddleIndex1 + 1;
            AverageValue = ((ListArray[MiddleIndex1]) + (ListArray[MiddleIndex2]))/2
            console.log('The Rolling Median of the Sequence is: ' + AverageValue);
        } else {
            MiddleIndex = Math.floor(ListArray.length/2);
            console.log('The Rolling Median of the Sequence is: ' + ListArray[MiddleIndex]);
        };
    };
};

RollingMedian(inputArray);