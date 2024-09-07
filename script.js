
const сelsius = 25;
const fahrenheit = (tempCelsius * 9/5) + 32;
console.log(`Температура в Фаренгейтах: ${fahrenheit}`);


const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(`Кількість годин у місяці: ${hoursInMonth}`);
console.log(`Кількість хвилин у місяці: ${minutesInMonth}`);


let health = 100;
let energy = 80;
health -= 20;
energy -= 52;
console.log(`Рівень здоров'я гравця: ${health}`);
console.log(`Рівень енергії гравця: ${energy}`);


const price = 200;
const discount = price * 0.10;
const finalPrice = price - discount;
console.log(`Сума після знижки: ${finalPrice}`);


const fNumber = 45.67;
const roundNumber = Math.floor(fNumber);
console.log(`Округлене число: ${roundNumber}`);


const floatString = "123.45";
const parseFloat = parseFloat(floatString);
console.log(`Перетворене число: ${parsedFloat}`);


const string = "987";
const parseInt = parseInt(string);
console.log(`Перетворене ціле число: ${parsedInt}`);


const number = 144;
const sqrtNumber = Math.sqrt(number);
console.log(`Квадратний корінь числа: ${sqrtNumber}`);


const intValue = 42;
const stringValue = "56";
const convertedInt = parseInt(stringValue); 
console.log(`Ціле число з рядка: ${convertedInt}`);
const convertedString = intValue.toString();
console.log(`Рядок з числа: ${convertedString}`);