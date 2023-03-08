const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your number : ", (number) => {
  console.log(
    `Fibonacci sequence for ${number} is : ` + cachedRecursiveFibonacci(number)
  );
  readline.close();
});

const forLoopFibonacci = (x) => {
  let a = 0,
    b = 1,
    c = x;
  for (let i = 2; i <= x; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};
const recrusiveFibonacci = (x) => {
  if (x <= 1) {
    return x;
  }
  return recrusiveFibonacci(x - 1) + recrusiveFibonacci(x - 2);
};

function cachedRecursiveFibonacci(x, cache = {}) {
  if (x in cache) {
    return cache[x];
  }
  if (x <= 1) {
    return x;
  }
  cache[x] =
    cachedRecursiveFibonacci(x - 1, cache) +
    cachedRecursiveFibonacci(x - 2, cache);
  return cache[x];
}
