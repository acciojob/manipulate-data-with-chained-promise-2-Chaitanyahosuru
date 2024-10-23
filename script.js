//your JS code here. If required.
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000); // Resolves after 3 seconds
    });
}

getNumbers()
    .then(numbers => {
        // Filter out odd numbers
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        document.getElementById("output").textContent = `Even Numbers: ${evenNumbers.join(', ')}`;
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(evenNumbers);
            }, 1000); // Wait 1 second before resolving
        });
    })
    .then(evenNumbers => {
        // Multiply even numbers by 2
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        document.getElementById("output").textContent = `Multiplied Even Numbers: ${multipliedNumbers.join(', ')}`;
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(multipliedNumbers);
            }, 2000); // Wait 2 seconds before resolving
        });
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
