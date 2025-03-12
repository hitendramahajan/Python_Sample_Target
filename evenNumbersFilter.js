import { filterEvenNumbersAsync } from './filterEvenNumbers.js'; 
// Function to process the list and log even numbers asynchronously 
export const processNumbers = async (numbers) => { 
    try { 
        const evenNumbers = await filterEvenNumbersAsync(numbers); 
        console.log('Even numbers:', evenNumbers); 
    } catch (error) { 
        console.error('An error occurred while processing numbers:', error.message); 
        console.error(error.stack); 
    } 
};