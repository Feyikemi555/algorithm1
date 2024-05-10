function analyzeSentence() {
    let sentence = prompt("Enter a sentence ending with a full stop:")};
    
    // Check if the user canceled the prompt or didn't input anything
    if (!sentence) {
        console.log("No input provided.");
        return;
    }

    let lengthOfSentence = 0;  // Counter for the length of the sentence
    let numberOfWords = 0;     // Counter for the number of words
    let numberOfVowels = 0;    // Counter for the number of vowels

    // Define vowels for checking
    const vowels = "aeiouAEIOU";

    // Iterate through each character of the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        // Increment sentence length counter for each character
        lengthOfSentence++;

        // Check for word boundary (space followed by a non-space character)
        if (char === ' ' && i > 0 && sentence[i - 1] !== ' ') {
            numberOfWords++;
        }

        // Check for vowels
        if (vowels.includes(char)) {
            numberOfVowels++;
        }
    }

    // Increment word count by 1 if the sentence doesn't end with a space
    if (sentence.trim().endsWith('.')) {
        numberOfWords++;
    }

    // Output results 
