var name = 'Ann';

const states = 50;

var sum = add(5, 4);

//adding two numbers
function add(num1, num2) {
    return num1 + num2;
}

//checks first letter of name
var firstLetterName = name.charAt(0);

//message depending on first letter of name
if (firstLetterName == 'L') {
    console.log('Back of the line!');
} else {
    console.log('Next!');
}

//Hello World function
function sayHello () {
    alert('Hello World!');
}

sayHello();

//alert checking age
function checkAge (name, age) {
    if (age < 21) {alert('Sorry ' + name + ", you aren't old enough to view this page!")}
}

checkAge('Charles', 21);

checkAge('Abby', 27);

checkAge('James', 18);

checkAge('John', 17);

let favVegetables = ["broccoli", "cauliflower", "brussels sprouts", "spinach", "squash"];
let total = favVegetables.length;

//displays list of vegetables in console area
for (let i = 0; i < total; ++i) {
    console.log(favVegetables[i]);
}

let list = [{name: 'Ann', age: 32}, {name: 'Dennis', age: 34}, {name: 'Everett', age: 3}, {name: 'Melissa', age: 34}, {name: 'Lea', age: 5}];

//checks ages in list array
for (let i = 0; i < list.length; ++i) {
   checkAge(list[i].name, list[i].age);
}

//checks number of characters
function getLength (string) {
    return (string.length);
} 

let helloLength = getLength('Hello World');

//displays message for odd or even length
if (helloLength % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}