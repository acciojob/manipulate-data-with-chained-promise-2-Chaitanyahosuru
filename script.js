//your JS code here. If required.
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Chain promises to filter and multiply numbers
getNumbers()
  .then((numbers) => {
    // Filter out odd numbers
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    // Update output after 1 second
    setTimeout(() => {
      document.getElementById('output').innerText = `Even numbers: ${evenNumbers.join(', ')}`;
    }, 1000);
    // Return even numbers for next promise
    return evenNumbers;
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2
    const doubledNumbers = evenNumbers.map((num) => num * 2);
    // Update output after 2 seconds
    setTimeout(() => {
      document.getElementById('output').innerText = `Doubled numbers: ${doubledNumbers.join(', ')}`;
    }, 2000);
  })
  .catch((error) => console.error(error));

