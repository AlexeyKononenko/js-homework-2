function isPrime(n) {
    for( i = 2; i < n; i++){
        if (n % i === 0){
            return false
        }
    }
    return true
}


function getPrimesFor(num) {
    const primes = [];
    
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    
    return primes;
  }


console.time()
console.log(getPrimesFor(process.argv[2]))
console.timeEnd()