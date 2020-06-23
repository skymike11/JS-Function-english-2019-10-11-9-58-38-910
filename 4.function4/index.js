function countWords(message){
    let array=str.split(" ")
    let count = 0
    array.forEach(item => {
        if(item.replace(/\s/g, "") !== ','){
            count++
        }
    })
    return count
}
console.log(countWords('Good morning, I love JavaScript.'))// should return 5