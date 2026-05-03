//function 2 dhoroner hoy: normal function and arrow function

// normal function
function add(a: number, b: number): number {
  return a + b;
}

// arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// arrow function with implicit return
const multiply = (a: number, b: number): number => a * b;

// arrow function with single parameter (parentheses can be omitted)
const square = (x: number): number => x * x;

// void return type (no return value)
function logMessage(message: string): void {
  console.log(message);
}

// unknown return type (can return any type, but must be checked before use)
function getRandomValue(): unknown {
  const random = Math.random();
  if (random < 0.5) {
    return "Hello";
  } else {
    return 42;
  }
}
//object=>function=>method
const poorUser = {
  name: "mesbah",
  balance:0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  }
}
poorUser.addBalance(100)

const arr:number[]=[1,2,3,4,5]
const newArr = arr.map((num: number): number => num * 2) // map method is a function that takes a callback function and applies it to each element of the array, returning a new array with the results
//note:ekhane (num: number) return kore number type tai (num: number):number hoiyeche, jodi return type na dite chai tahole TypeScript automatically infer kore nibe je return type number hobe karon num * 2 always number hobe
