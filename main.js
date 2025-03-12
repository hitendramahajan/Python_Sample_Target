import { processNumbers } from './evenNumbersFilter.js'; 
// Sample list of numbers 
const numbers = [1, 2, 3, 4]; 
// Process the numbers to filter and log even numbers 
(async () => { 
    try { 
        await processNumbers(numbers); 
    } catch (error) { 
        console.error("An unexpected error occurred:", error.message); 
    } 
})();