const fs = require('fs');

// Read input from input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  // Convert input to number and multiply by 2
  const inputFromTextFile = parseFloat(data.trim());
  let input = inputFromTextFile;
  // const result = input * 2;
  /*---------------------------------------------*/


  /*---------------------------------------------*/
  // Write result to output.txt
  fs.writeFile('output.txt', result.toString(), 'utf8', (err) => {
    if (err) {
      console.error('Error writing output file:', err);
      return;
    }
    console.log('Result:', result);
  });
});