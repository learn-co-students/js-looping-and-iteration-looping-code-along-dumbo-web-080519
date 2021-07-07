// Code your solutions in this file

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length ; i++ ) {
        thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
}

function countdown(countdown) { 
    while (countdown > 0 ){
        console.log(countdown);
        countdown -= 1
    };
    console.log(countdown);
}

// function countdown( countdown ) {
//     while ( countdown > 0 ) {
//       console.log( countdown );
//       countdown -= 1;
//     }
//     console.log( countdown );
//   }
    
// function writeCards( namesArray, event ) {
//     let thankYouCards = []
//     for ( let i = 0; i < namesArray.length; i++ ) {
//       thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
//     }
//     return thankYouCards
//   }

// To get more acquainted with `while`, your task is to write a function,
// `countdown`, that takes in any positive integer and, starting from that number,
// counts down to zero using `console.log()`. So, when written if you were to run
