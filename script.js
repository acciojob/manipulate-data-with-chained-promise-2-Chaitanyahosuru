//your JS code here. If required.
function getArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000); // Resolves with the array after 3 seconds
    });
}

function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        setTimeout(() => {
            document.getElementById('output').innerText = evenNumbers.join(', ');
            resolve(evenNumbers);
        }, 1000); // Update output after 1 second
    });
}

function multiplyByTwo(numbers) {
    return new Promise((resolve) => {
        const multiplied = numbers.map(num => num * 2);
        setTimeout(() => {
            document.getElementById('output').innerText = multiplied.join(', ');
            resolve(multiplied);
        }, 2000); // Update output after 2 seconds
    });
}

// Start the promise chain
getArray()
    .then(filterEvenNumbers)
    .then(multiplyByTwo);
