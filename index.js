function isPalindrome(word) {
word = word.toLowerCase();
const reversedWord = word.split("").reverse().join("");
return word === reversedWord;
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  initialize a function called isPalindrome
  convert the words to lowercase,split,reverse and join the elements.
  return the comparison of the original word and the reversed word.
*/

/*
  Add written explanation of your solution here
  first convert the word to lowercase 
  split the words using.split("")
  reverse the words using reverse()
  join the words using.join("")
  compare both the original and reversed words.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
