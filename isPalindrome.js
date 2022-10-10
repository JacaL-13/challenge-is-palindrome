// Write your code below

function checkPalindrome(word) {
    // const wordArray = word.split('')
    // const newArray = []
    // for (let i = wordArray.length; i > -1; i--) {
    //     newArray.push(wordArray[i])
    // }
    // const newArray = wordArray.reverse()
    // const newWord = newArray.join('')
    // return newArray.join('') === word ? true : false
    // const newWord = word.split('').reverse().join('')
    return word === word.split('').reverse().join('')
}

console.log(checkPalindrome('racecar'))