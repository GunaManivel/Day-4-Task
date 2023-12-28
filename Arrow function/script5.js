// 2.e Return all the palindromes in an array using arrow function

const numbers = [121, 123, 1331, 454, 9878, 1001];
const Palindromes = (arr) => {
  const isPalindrome = num => {
    const strNum = num.toString();
    const reversed = strNum.split('').reverse().join('');
    return strNum === reversed;
  };

  return arr.filter(isPalindrome);
};
console.log(Palindromes(numbers))