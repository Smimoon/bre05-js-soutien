// function removeDuplicatesArray(array) {
//     let unique = [];
    
//     for (let i = 0; i < array.length; i++) {
        
//         for (let j = 0; j < unique.length; j++) {
            
//         }
//         return unique;
//     }
// }


// CORRECTION

function isNumberInArray(number, array)
{
    for(let nb of array)
    {
      if( nb === number)
      {
        return true;
      }
    }

    return false;
}

function removeDuplicates(array)
{
  let unique = [];

  for(let number of array)
  {
    if(isNumberInArray(number, unique) === false)
    {
      unique.push(number);
    }
  }

  return unique;
}
let table = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(`${removeDuplicates(table)}`);
table = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50];
console.log(`${removeDuplicates(table)}`);
table = [5, 4, 3, 2, 1, 5, 4, 3, 2, 1];
console.log(`${removeDuplicates(table)}`);