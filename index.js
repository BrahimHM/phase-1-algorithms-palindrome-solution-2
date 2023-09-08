function isPalindrome(word) {
  let n=word.length
  let N=n/2
  // Write your algorithm here
  if(n%2===1){
    N=n/2+1
  }
  for(let i=0;i<=N;i++){
     if(word[i]!==word[n-i-1]){
      return false
     }
  }
  return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
