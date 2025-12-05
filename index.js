"use strict";
// question 1
let longText = `This is a long text that spans multiple lines.`;
let shortText = longText.substring(0, 10);
console.log(shortText);
// question 2
let str1 = "hello";
let str2 = "world";
let result = str1 == str2;
console.log(result);
// question 3
let product = "laptop";
let price = 120000;
console.log(`the product ${product} is priced at ${price} dollars`);
// question 4
function isEvenorOdd(num) {
    return num % 2 === 0;
}
console.log(isEvenorOdd(10));
console.log(isEvenorOdd(3));
console.log(isEvenorOdd(101));
// question 5
function isDivisibleBy4and8(num) {
    return num % 4 === 0 && num % 8 === 0;
}
console.log(isDivisibleBy4and8(32));
console.log(isDivisibleBy4and8(18));
console.log(isDivisibleBy4and8(16));
// question 6
const ispalindromen = (str) => {
    const palindromeString = str.split("").reverse().join("");
    return str === palindromeString;
};
ispalindromen("madam");
ispalindromen("hello");
ispalindromen("racecar");
// question 7
function average(numbers) {
    let avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    return avg;
}
console.log(average([10, 20, 30, 40, 50]));
console.log(average([5, 15, 25]));
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// question 8
const findMaxValue = (num) => {
    return Math.max(...num);
};
console.log(findMaxValue([10, 20, 5, 30, 15]));
console.log(findMaxValue([-10, -20, -5, -30, -15]));
console.log(findMaxValue([0, 5, 10, 15, 20]));
// question 9
let message = "Hello Typescript";
console.log(message);
// question 10
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10));
// question 11
const names = ["Alice", "Bob", "Charlie", "Andrew"];
const filterNames = names.filter((name) => {
    return name.startsWith("A");
});
console.log(filterNames);
// question 12
const Product = {
    name: "Laptop",
    price: 1500,
    quantity: 5
};
console.log(Product.price * Product.quantity);
const Student = {
    name: "Gaurav",
    age: 28,
    greet: (country) => {
        return `Hello, my name is ${Student.name} and i am ${Student.age} years old from ${country}`;
    }
};
console.log(Student.greet("India"));
const product1 = ["smartPhone", 40000, 10];
const product2 = ["Watch", 30000, 5];
const displayProduct = (product) => {
    const [product_name, price, quantity] = product;
    console.log(`Product: ${product_name} price: ${price} quantity in stock: ${quantity}`);
};
displayProduct(product1);
displayProduct(product2);
const grades = [["Math", 85], ["English", 75], ["Science", 95]];
function calculateAverageGrade(grades) {
    let total = 0;
    grades.map((ele) => {
        total += ele[1];
    });
    let avg = total / grades.length;
    return avg;
}
console.log(calculateAverageGrade(grades));
const weatherDataDetails = [
    ["New York", 25, "Sunny"],
    ["Los Angeles", 30, "Cloudy"],
    ["Chicago", 20, "Rainy"]
];
function displayWeatherData(data) {
    data.forEach((ele) => {
        const [cityName, temperature, condition] = ele;
        console.log(`City: ${cityName}, Temperature: ${temperature}°C, Condition: ${condition}`);
    });
}
displayWeatherData(weatherDataDetails);
function displayValue(val) {
    if (typeof val === "number") {
        return val * val;
    }
    else {
        return val.toUpperCase();
    }
}
console.log(displayValue(5));
console.log(displayValue('hello'));
// question 17
function formatValue(val) {
    if (typeof val === "number") {
        return val.toFixed(2);
    }
    else if (typeof val === "boolean") {
        return val ? "Yes" : "No";
    }
    else {
        const firstCapitalLetter = val.charAt(0).toUpperCase();
        return firstCapitalLetter + val.slice(1).toLowerCase();
    }
}
console.log(formatValue(12.3456));
console.log(formatValue(true));
console.log(formatValue("hello world"));
