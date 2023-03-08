## Fibonacci Algorithm

Fibonacci sequence is a **sequence of numbers** in such a way that **each number is the sum of the two previous numbers** . Provided that the first two numbers are **0 and 1** .

Example :

**0, 1, 1, 2, 3, 5, 8, 13, 21**

It can be represented by the following formula: **F(n) = F(n-1) + F(n-2)**, where **F(0) = 0**, **F(1) = 1**

### Implementation :

</br>

- For loop Solution :

```javascript
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
```

In this solution, we add two numbers in a loop (**a + b**) and reassign each item with the next value (**a** with **b**, **b** with **c** - the result of **a + b**)

The **time complexity** of this algorithm and piece of code is **not suitable**. Because we run the loop from **2 to x** and as the desired number increases, the **time complexity increases and the performance of the code decreases** .

</br>

- Recursive Solution :

```javascript
function recrusiveFibonacci(x) {
  if (x <= 1) {
    return x;
  }
  return recrusiveFibonacci(x - 1) + recrusiveFibonacci(x - 2);
}
```

In this solution if we pass a number that is **less than or equal to 1**, we just return this number . For **larger values of n**, the **function calls itself recursively** and it is not suitable too . The downside of this algorithm is that it can be quite slow for large values of n due to the number of function calls required .

</br>

- Cached Recursive Solution :

```javascript
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
```

This algorithm is a modification of the recursive algorithm that uses cache to improve its performance. it involves caching the results of previous function calls so that they can be quickly retrieved when needed again. I think this is the best solution for Fibonacci sequence

</br>

---

## Run Project

</br>

You must have a version of NodeJS installed on your operating system . Then :

```
cd fibonacci
yarn install
node index.js
```
