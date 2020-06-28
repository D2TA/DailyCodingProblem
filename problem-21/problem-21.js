var IntervalArray = [ [30, 75], [30, 60], [20, 30], [0, 50], [0,50], [60, 150] ]

function MinRooms(IntervalArray){
    ConflictArray = []
    CriteriaArray = []
    for (i = 0; i <= IntervalArray.length - 1; i++){
        var ClassInterval = IntervalArray[i]
        var ClassStart = ClassInterval[0];
        var ClassEnd = ClassInterval[1];
    
        OtherClassInterval = IntervalArray.filter(function classCheck(item){
            return item[0] != ClassStart && item[1] != ClassEnd;
        });
        for (i = 0; i <= OtherClassInterval.length - 1; i++){
            var OtherClass = OtherClassInterval[i]
            var OtherClassStart = OtherClass[0] 
            var OtherClassEnd = OtherClass[1]

            // Comparision
            if (OtherClassEnd >= ClassStart && OtherClassEnd < ClassEnd && OtherClassEnd != ClassStart){
                ConflictArray.push( ClassInterval, OtherClass )
                CriteriaArray.push(1)
            } else if (ClassEnd > OtherClassStart && ClassEnd >= OtherClassEnd && ClassStart < OtherClassStart ) {
                ConflictArray.push( ClassInterval, OtherClass )
                CriteriaArray.push(2)
            };
        };
    };
    
    // Suggestion
    if (ConflictArray.length > 0){
        console.log(ConflictArray);
        console.log(CriteriaArray);
        ConflictClass = ConflictArray.filter( 
            function onlyUnique(value, index, self){
                return self.indexOf(value) === index;
            }
        );
        console.log('There is a conflict for: ')
        console.log(ConflictClass)
        console.log('The minimum number of rooms required will be: ' + ConflictClass.length)
    } else {
        console.log('No Conflicts in Lectures')
    };

};

MinRooms(IntervalArray);