//your JS code here. If required.
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Chain promises to transform the data
getData()
  .then(data => {
    // Filter out odd numbers
    const evenNumbers = data.filter(num => num % 2 === 0);
    // Update output after 1 second
    setTimeout(() => {
      document.getElementById('output').innerText = evenNumbers.join(', ');
    }, 1000);
    return evenNumbers;
  })
  .then(evenNumbers => {
    // Multiply even numbers by 2
    const doubledNumbers = evenNumbers.map(num => num * 2);
    // Update output after another 2 seconds
    setTimeout(() => {
      document.getElementById('output').innerText = doubledNumbers.join(', ');
    }, 2000);
  });


