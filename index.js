const numbers = [2, 4, 6, 8];

const multiplyByTwo = numbers.map(number => number * 2);

console.log(multiplyByTwo);

const names = ["Alice", "Bob", "Charlie"];

const greetingMessages = names.map(name => `Hello, ${name}!`);

console.log(greetingMessages);

const people = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Anna", lastName: "Smith"},
    {firstName: "Peter", lastName: "Jones"}
 ];

 const onlyTheLastNames = people.map(person => person.lastName);

 console.log(onlyTheLastNames);

const words = ["apple", "banana", "cherry"];

const wordsLength = words.map(fruit => fruit.length);

console.log(wordsLength);

