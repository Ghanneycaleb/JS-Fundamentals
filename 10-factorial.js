function factorial (n) {
  if (n < 2) return 1;            // 0! and 1! are 1
  return n * factorial(n - 1);    // recursive step
}

const num = Number(process.argv[2]);   // cast to number

console.log(isNaN(num) ? 1 : factorial(num));
