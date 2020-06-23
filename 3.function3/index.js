function alphabetSort(message){
    let charArr = message.split('')
    return Array.from(charArr).sort().join("")
}
alphabetSort('hello'); // should return 'ehllo'