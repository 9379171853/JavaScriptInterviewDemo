//using iteration
// (function fibbnociSeries(num) {
//     let fib = [0, 1];
//     if (fib < 2) return 1;
//     for (let i = 2; i < num; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }

//     console.log("fib= ", fib)
// })(5);

// function fib(n) {
//     const result = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];
//         result.push(a + b);
//     }
//     return result[n];

// }

// console.log(fib(3));

//using reccursive

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(6));



