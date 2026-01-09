function isNumberBigger(number, array) {
    for(let nb of number) {
        if(nb>number){
            return "bigger";
        }
        else {
            return "smaller";
        }
    }
}



function sortAscendingNumbers(array) {
    let ascending = [];
    for (let number of array) {
        ascending.push(number);
        if(isNumberBigger(number, ascending) === "bigger") {
            ascending.push(number);
        }
        else {
            ascending.unshift(number);
        }
    }
    return ascending;
}







let table = [5, 3, 1, 4, 2]; 
console.log(`${sortAscendingNumbers(table)}`);

table = [10, 20, 30, 40, 50];
console.log(`${sortAscendingNumbers(table)}`);

table = [5, 4, 3, 2, 1];
console.log(`${sortAscendingNumbers(table)}`);