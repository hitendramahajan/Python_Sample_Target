export const filterEvenNumbersAsync = (numbers) => { 
    return new Promise((resolve, reject) => { 
        try { 
            if (!Array.isArray(numbers)) { 
                throw new TypeError("Input must be an array"); 
            } 
            const evenNumbers = numbers.filter(number => { 
                if (typeof number !== 'number') { 
                    throw new TypeError("Array must contain only numbers"); 
                } 
                return number % 2 === 0; 
            }); 
            resolve(evenNumbers); 
        } catch (error) { 
            console.error("An error occurred while filtering even numbers:", error.message, error.stack); 
            reject('Error filtering even numbers: ' + error.message); 
        } 
    }); 
};