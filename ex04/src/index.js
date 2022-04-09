function sumFibonacci(num) {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  var sum = 0;

  function fib(counter) {
    if (counter === 2) {
      return [1, 1];
    } else {
      const countArr = fib(counter - 1);
      countArr.push(countArr[countArr.length - 2] + countArr[countArr.length - 1]);
      return countArr;
    }
  }

  var fibArr = fib(num);

  for (var i = 0; fibArr[i] <= num; i++) {
    if (fibArr[i] % 2 !== 0) {
      sum += fibArr[i];
    }
  }

  return sum;
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;