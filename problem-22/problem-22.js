const fs = require('fs');
const http = require('http');


var SetWord = ['bed', 'bath', 'bedbath', 'and', 'beyond']
var StringInput = "bedbathandbeyond"
var GuessArray = []
// Are there any words within words?
for (i = 0; i <= SetWord.length - 1; i++){
    WordSearch = SetWord[i].toString();
    GuessSearch = WordSearch;
    for (j = 0; j <= SetWord.length - 1; j++){
        if (i != j ||  ){
            OtherWord = SetWord[j].toString();
            GuessSearch = GuessSearch + OtherWord
            console.log(GuessSearch)
            if (GuessSearch.length === StringInput.length){
                GuessArray.push(GuessSearch);
            }
        }
    };
    GuessSearch = ''
};

console.log(GuessArray);