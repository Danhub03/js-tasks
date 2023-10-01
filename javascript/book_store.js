// Book store
// ticketStatus = (tickets, ticketId) => (tickets[ticketId] === undefined ? "unknown ticket id" : tickets[ticketId] === null ? "not sold": `sold to ${tickets[ticketId]}`);

// let buyBooks = prompt("How many different books do you want to buy?");

// calculateGroupCost = (buyBooks) => {
//     let result = 0

//     switch (buyBooks) {
//         case 5:
//             result = (800 - 800 * 0.25) * 5;
//             break;
        
//         case 4:
//             result = (800 - 800 * 0.20) * 4;
//             break;
        
//         case 3:
//             result = (800 - 800 * 0.10) * 3;
//             break;

//         case 2:
//             result = (800 - 800 * 0.05) * 2;
        
//         case 1:
//             result = 800;
//             break;

//         default:
//             break;
                   
//     }

//     return result

// }

// console.log(calculateGroupCost = (buyBooks));


let buyBooks = prompt("How many different books do you want to buy?");

const calculateGroupCost = (buyBooks) => {
  let result = 0;

  switch (parseInt(buyBooks)) { // Läs inmatningen som ett heltal med parseInt
    case 5:
      result = (800 - 800 * 0.25) * 5;
      break;

    case 4:
      result = (800 - 800 * 0.20) * 4;
      break;

    case 3:
      result = (800 - 800 * 0.10) * 3;
      break;

    case 2:
      result = (800 - 800 * 0.05) * 2;
      break;

    case 1:
      result = 800;
      break;

    default:
      break;
  }

  return result;
};

console.log(calculateGroupCost(buyBooks));


// One copy of any of the five books costs $8.

// If, however, you buy two different books, you get a 5% discount on those two books.

// If you buy 3 different books, you get a 10% discount.

// If you buy 4 different books, you get a 20% discount.

// If you buy all 5, you get a 25% discount.

// Note that if you buy four books, of which 3 are different titles, you get a 10% discount on the 
// 3 that form part of a set, but the fourth book still costs $8.

// const calculateGroupCost = (groupLength) => {
    
              
//     let result = 0
    
              
//     switch (groupLength) {
              
//     case 5:
    
              
//         result = (800 - 800 * 0.25) * 5;
              
//         break;
    
              
//     case 4:
         
//         result = (800 - 800 * 0.20) * 4;
           
//         break;
    
              
//     case 3:
       
//         result = (800 - 800 * 0.10) * 3;
       
//         break;
              
//     case 2:
              
//         result = (800 - 800 * 0.05) * 2;
             
//         break;
             
//     case 1:
           
//         result = 800;
              
//         break;
              
//         default:
              
//         break;
    
              
//       }
           
//       return result;

    
              
//     }
    