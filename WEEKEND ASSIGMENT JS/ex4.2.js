function tribonacci(n){


    let tribonacciSeries=[0,0,1]
    let i;
    for(i=3;i<=n;i++)
    tribonacciSeries.push(tribonacciSeries[i-1]+tribonacciSeries[i-2]+tribonacciSeries[i-3])

    return tribonacciSeries
}
console.log(
    tribonacci(5)
);