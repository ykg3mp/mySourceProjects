// write a function that takes in an array of strings and returns and object that has 
// length "key": <number of words> 
// sentence "key": <array joined by spaces> 

function lengthOfSentence(arrayOfStrings){

    let numOfWords =  arrayOfStrings.length;
    let sentence = arrayOfStrings.join(' ');

    return numOfWords, sentence; 
}

myArray = ["Houston,", "we", "have", "a" ,"problem."]
console.log(lengthOfSentence(myArray))

