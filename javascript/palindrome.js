var word = 'A Daniela ama a lei nada';

function isPalindrome (expression) {
    var palindrome = true;
    // clean up and standardization
    expression = expression.replace(/\s/g, '');
    expression = expression.toLowerCase();
    let midPoint = Math.floor(word.length/2);
    // comparison phase
    for (let i = 0; i < midPoint; i++) {
        if (expression.charAt(i) == expression.charAt((expression.length - 1) - i)) {
            continue;
        } else {
            palindrome = false;
            break;
        }
    }

    return palindrome;
}

console.log(`${word} ${isPalindrome(word) ? 'is' : 'is not'} a palindrome`);