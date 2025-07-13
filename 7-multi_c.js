const count = parseInt(process.argv[2], 10);
let output = '';

for (let i = 0; i < count; i++) {
  output += 'C is fun\n';
}

console.log(
  Number.isInteger(count) ? output.trimEnd() : 'Missing number of occurrences'
);
