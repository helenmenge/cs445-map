const fibo = (function(){
    let memo = {};
    const fibonacci = function(n){
        let fib;
        if(n in memo){
            fib = memo[n];
        }else{
            if(n<=1){
                fib = n;
            }else{
                fib = fibonacci(n-1) + fibonacci(n-2);
                memo[n] = fib;
            }
       }
         return fib;   
    }
    return fibonacci;
})();

const n = 45;
 console.time("excution t:");
 console.log(`the ${n}th fiboMemo is: ${fibo(n)}`);
 console.timeEnd("excution t:");