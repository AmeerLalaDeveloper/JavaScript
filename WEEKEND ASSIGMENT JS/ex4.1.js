function fibonacci(n){


    let fibonacciSeries=[0,1]
    let i;
    for(i=2;i<=n;i++)
    fibonacciSeries.push(fibonacciSeries[i-1]+fibonacciSeries[i-2])

    return fibonacciSeries[fibonacciSeries.length-1]
}
console.log(
    fibonacci(5)
);