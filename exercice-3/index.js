function findLongestWord(words) {
    let x = 0;
    let longest = "";
    for(let i = 0; i<words.length; i++ ) {
        if (words[i].length > x) {
            x = words[i].length;
            longest = words[i];
        }
    }
    return longest;

}

let test = ['hello', 'world', 'javascript', 'python', 'java'];
console.log(`The longest word is ${findLongestWord(test)}`);

test = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(`The longest word is ${findLongestWord(test)}`);

test = ['cat', 'dog', 'elephant', 'fox'];
console.log(`The longest word is ${findLongestWord(test)}`);