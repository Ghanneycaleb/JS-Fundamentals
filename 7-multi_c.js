const n = Number(process.argv[2]);

if (!Number.isInteger(n)) {
  
  console.log('Missing number of occurrences');
} else if (n > 0) {
  let txt = '';
  for (let i = 0; i < n; i++) {
    txt += 'C is fun\n';
  }
  console.log(txt.trimEnd());
}
