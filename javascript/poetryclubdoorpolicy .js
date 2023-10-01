// Task 1

frontDoorResponse = (line) => line[0];

console.log(frontDoorResponse('Stands so high'));

// 'cat'[1];
// // => 'a'


// Task 2

frontDoorPassword = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase();

console.log(frontDoorPassword('SHIRE'));
console.log(frontDoorPassword('shire'));

// frontDoorPassword('SHIRE');
// // => "Shire"

// frontDoorPassword('shire');
// // => "Shire"

// Task 3

backDoorResponse = (line) => line[13];

console.log(backDoorResponse('Stands so high'));
console.log(backDoorResponse('Stands so high   '));


// backDoorResponse('Stands so high');
// // => "h"

// backDoorResponse('Stands so high   ');
// // => "h"

// Task 4

backDoorPassword = (word) => frontDoorPassword(word) + ", please";

console.log(backDoorPassword('horse'));



// export function backDoorPassword(word) 
              
//       return frontDoorPassword(word) + ', please';

// toUpperCase and toLowerCase - change the case of all characters

// backDoorPassword('horse');
// => "Horse, please"


