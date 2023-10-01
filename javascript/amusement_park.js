// Task 1
createVisitor = (names, age, ticketId) => ({"names": names, "age" : age, "ticketId": ticketId});

console.log(createVisitor('Verena Nardi', 45, 'H32AZ123'));



// Task 2

revokeTicket = (visitor) => Object.assign(visitor, {ticketId: null});

const visitor = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };

console.log(revokeTicket(visitor));

// Task 3

ticketStatus = (tickets, ticketId) => (tickets[ticketId] === undefined ? "unknown ticket id" : tickets[ticketId] === null ? "not sold": `sold to ${tickets[ticketId]}`);

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };

  console.log(ticketStatus(tickets,'RE90VAW7'));
  
// ticketStatus(tickets, 'RE90VAW7');
// // => 'unknown ticket id'

// ticketStatus(tickets, '0H2AZ123');
// // => 'not sold'

// ticketStatus(tickets, '23LA9T41');
// // => 'sold to Verena Nardi'


// Task 4

simpleTicketStatus = (ticket, ticketId) => (ticket[ticketId] ?? "invalid ticket !!!");


// const tickets = {
//     '0H2AZ123': null,
//     '23LA9T41': 'Verena Nardi',
//   };
  
  console.log(simpleTicketStatus(tickets, '23LA9T41'));
  console.log(simpleTicketStatus(tickets, '0H2AZ123'));

// simpleTicketStatus(tickets, '23LA9T41');
// // => 'Verena Nardi'

// simpleTicketStatus(tickets, '0H2AZ123');
// // => 'invalid ticket !!!'

// simpleTicketStatus(tickets, 'RE90VAW7');
// // => 'invalid ticket !!!'


// Task 5

gtcVersion = (visitor) => visitor.gtc && visitor.gtc.version ? visitor.gtc.version : undefined;

const visitorNew = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
  gtc: {
    signed: true,
    version: '2.1',
  },
};

console.log(gtcVersion(visitorNew)); // Output: '2.1'

const visitorOld = {
  name: 'Verena Nardi',
  age: 45,
  ticketId: 'H32AZ123',
};

console.log(gtcVersion(visitorOld)); // Output: undefined

// gtcVersion = (visitor) => (visitor["gtc"] === undefined || visitor["gtc"]["version"] === undefined) ? => undefined





// (Age <= 22 && examen == "ja") ? alert("Du kan komma in") : alert("Du kan tyvärr inte komma in");
