// Cracking the code
// A code has been invented which replaces each character in a sentence with a five letter word. The first letter of each encoded word determines which of the remaining four characters contains the decoded character according to this table:

// First letter	Character number
// a	2
// b	3
// c	4
// d	5
// So for example, the encoded word 'cycle' would be decoded to the character 'l'. This is because the first letter is a 'c', so you look for the fourth character, which is 'l'.

// If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

// Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.

// Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.



function decode(message) {
    let obj = {
        a: 2,
        b: 3,
        c: 4,
        d: 5
    };
    //we created an object(map)
    const words = message.split(' ') 
    let result = '';
    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        const currentCh = word[0];
        if(currentCh in obj) {
            const num = obj[currentCh];
            result += word[num-1]
        }
        else {
            result += ' ';
        }
       
    }

     return result;

    
}

decode('craft block argon meter bells brown croon droop');






