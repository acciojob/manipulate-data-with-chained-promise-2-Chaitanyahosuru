//your JS code here. If required.
function getArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000); // Resolves after 3 seconds
    });
}

// Function to update the output div
function updateOutput(text) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = text;
}

// Chain promises to process the array
getArray()
    .then((arr) => {
        // Filter out odd numbers
        const evenNumbers = arr.filter(num => num % 2 === 0);
        // Update output after 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                updateOutput(evenNumbers.join(', '));
                resolve(evenNumbers);
            }, 1000); // 1 second
        });
    })
    .then((evenNumbers) => {
        // Multiply even numbers by 2
        const multipliedEvenNumbers = evenNumbers.map(num => num * 2);
        // Update output after 2 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                updateOutput(multipliedEvenNumbers.join(', '));
                resolve();
            }, 2000); // 2 seconds
        });
    });
