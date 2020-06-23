function palindrome(message){
    if (message === message.split('').reverse().join('')){
        return true
    } else {
        return false
    }
}
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true