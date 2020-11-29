const findLongestWord = function(string) {
    string = string.split(' ');
    let longestWord = string[0];
    for (let i = 1; i < string.length; i += 1) {
        if (string[i].length > longestWord.length) {
            longestWord = string[i];
        }
    }
    return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
