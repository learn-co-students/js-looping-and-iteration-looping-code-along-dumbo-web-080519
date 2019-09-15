// Code your solutions in this file
function writeCards(arrayOfNames, word) {
    let newArray = []
    for (let index = 0; index < arrayOfNames.length; index++) {
    newArray.push(`Thank you, ${arrayOfNames[index]}, for the wonderful ${word} gift!`)
    }
    return newArray
}

function countdown(number) {
    for (let num = number; num >= 0; num--) {
        console.log(num)
    }

    // while (number > 0) {
    //     console.log(number);
    //     number--
    // }
}