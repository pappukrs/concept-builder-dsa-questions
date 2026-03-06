function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // base case
    }

    return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120