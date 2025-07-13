const count = Number(process.argv[2]);

if (!Number.isInteger(count)) {
  console.log('Missing number of occurrences');
} else {
  let output = '';
  for (let i = 0; i < Math.abs(count); i++) {
    output += 'C is fun\n';
  }
  console.log(output.trimEnd());
}
