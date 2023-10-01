// Task 1

dayRate = a => a * 8

console.log(dayRate(89));

// Task 2

daysInBudget = (a,b) => a / b / 8

console.log(Math.floor(daysInBudget(20000, 89)));


// Task 3

priceWithMonthlyDiscount = (ratePerHour, numDays, discount, dayRate = a => a * 8) => Math.ceil((numDays-numDays % 22) * dayRate(ratePerHour) * (1-discount) + (numDays % 22) * dayRate(ratePerHour));

console.log(priceWithMonthlyDiscount(89, 230, 0.42));

// I task 3 är dayRate redan defined i task 1 men jag definierade dayRate också inom 
// priceWithMonthlyDiscount ifall om du skulle adda comments eller tar bort hela task 1


