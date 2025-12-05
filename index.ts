// question 1
let longText: string = `This is a long text that spans multiple lines.`;
let shortText = longText.substring(0,10);
console.log(shortText);

// question 2
let str1: string = "hello";
let str2: string = "world";
let result: boolean = str1==str2;
console.log(result);

// question 3
let product: string = "laptop";
let price: number = 120000;
console.log(`the product ${product} is priced at ${price} dollars`)

// question 4
function isEvenorOdd(num: number): boolean {
  return num%2 === 0;
}

console.log(isEvenorOdd(10));
console.log(isEvenorOdd(3));
console.log(isEvenorOdd(101));

// question 5
function isDivisibleBy4and8 (num: number): boolean {
  return num%4===0 && num%8===0;
}

console.log(isDivisibleBy4and8(32));
console.log(isDivisibleBy4and8(18));
console.log(isDivisibleBy4and8(16));

// question 6
const ispalindromen= (str: string): boolean =>{
  const palindromeString = str.split("").reverse().join("");
  return str===palindromeString;
}

ispalindromen("madam");
ispalindromen("hello");
ispalindromen("racecar");

// question 7
function average(numbers: number[]): number {
  let avg = numbers.reduce((a,b)=>a+b,0)/numbers.length;
  return avg;
}

console.log(average([10,20,30,40,50]));
console.log(average([5,15,25]));
console.log(average([1,2,3,4,5,6,7,8,9,10]));

// question 8
const findMaxValue = (num:number[]): number =>{
    return Math.max(...num);
}

console.log(findMaxValue([10,20,5,30,15]));
console.log(findMaxValue([-10,-20,-5,-30,-15]));
console.log(findMaxValue([0,5,10,15,20]));

// question 9
let message  = "Hello Typescript";
console.log(message);

// question 10
function calculateArea(length:number, width:number){
  return length * width;
}

console.log(calculateArea(5,10));

// question 11
const names: string[] = ["Alice", "Bob", "Charlie","Andrew"];

const filterNames: string[] = names.filter((name: string)=>{
  return name.startsWith("A")
})

console.log(filterNames);

// question 12
const Product : {
  name: string;
  price: number;
  quantity: number;
} = {
  name: "Laptop",
  price: 1500,
  quantity: 5
}

console.log(Product.price * Product.quantity);

// question 13
type Person = {
  name: string;
  age: number;
  greet: (country: string)=> string; //call signature
}


const Student: Person = {
  name: "Gaurav",
  age: 28,
  greet: (country): string =>{
    return `Hello, my name is ${Student.name} and i am ${Student.age} years old from ${country}`;
  }
}

console.log(Student.greet("India"));

// question 14
type ProductInfo = [string,number,number];

const product1: ProductInfo = ["smartPhone",40000,10];
const product2: ProductInfo = ["Watch",30000,5];

const displayProduct = (product: ProductInfo): void =>{
  const [product_name,price,quantity] = product;
  console.log(`Product: ${product_name} price: ${price} quantity in stock: ${quantity}`);
}

displayProduct(product1);
displayProduct(product2);

// question 15
type SubjectGrade = [string, number];

const grades: SubjectGrade[] = [["Math",85],["English",75],["Science",95]];

function calculateAverageGrade(grades: SubjectGrade[]): number{
  let total: number = 0;
 grades.map((ele)=>{
  total += ele[1];

})
let avg: number = total/grades.length;
return avg;
}

console.log(calculateAverageGrade(grades));

// question 15
type WeatherData = [string, number, string];

const weatherDataDetails: WeatherData[] = [
  ["New York", 25, "Sunny"],
  ["Los Angeles", 30, "Cloudy"],
  ["Chicago", 20, "Rainy"]
];

function displayWeatherData(data: WeatherData[]): void{
  data.forEach((ele)=>{
    const [cityName, temperature, condition] = ele;
    console.log(`City: ${cityName}, Temperature: ${temperature}°C, Condition: ${condition}`);
  })
}

displayWeatherData(weatherDataDetails);

// question 16
type value= string | number;

function displayValue(val: value): value{
  if(typeof val === "number"){
    return val * val;
  }else{
    return val.toUpperCase();
  }
}

console.log(displayValue(5));
console.log(displayValue('hello'));

// question 17
function formatValue(val: string |number |boolean): string |number {
  if(typeof val === "number"){
    return val.toFixed(2);
  }else if(typeof val === "boolean"){
    return val ? "Yes" : "No";
  }else{
    const firstCapitalLetter = val.charAt(0).toUpperCase();
    return firstCapitalLetter + val.slice(1).toLowerCase();
  }
}

console.log(formatValue(12.3456));
console.log(formatValue(true));
console.log(formatValue("hello world"));


// question 18
type Person1 = {
  name: string;
  age: number;
}
type employee = {
  emp_id: number;
  salary: number;
}

const Emp1: Person1 | employee ={
  name: "John",
  age: 30,
  emp_id: 101,
  salary: 50000
}