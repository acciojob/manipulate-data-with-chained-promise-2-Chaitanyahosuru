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
        
        // Update the output with even numbers after 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").textContent = `Even Numbers: ${evenNumbers.join(', ')}`;
                resolve(evenNumbers);
            }, 1000); // Wait 1 second before resolving
        });
    })
    .then(evenNumbers => {
        // Multiply even numbers by 2
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        
        // Update the output with multiplied numbers after 1 second (instead of 2)
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").textContent = `Multiplied Even Numbers: ${multipliedNumbers.join(', ')}`;
                resolve(multipliedNumbers);
            }, 1000); // Wait 1 second before resolving
        });
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
cy.get('#output', { timeout: 10000 }).should('contain', 'Even Numbers: 2, 4');
describe('Transforming Data with Promise Chaining', () => {
    it('Check for array', () => {
        cy.visit('http://localhost:3000'); // Adjust the URL as necessary

        // Wait for the first output after filtering
        cy.get('#output').should('contain', 'Even Numbers: 2, 4');

        // Wait for the second output after multiplying
        cy.get('#output').should('contain', 'Multiplied Even Numbers: 4, 8');
    });
});

