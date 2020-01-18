function writeCards(namesArray, event) {
    let cards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      cards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return cards
  }
  
  function countdown(countdown) {
    while (countdown > 0) {
      console.log(countdown);
      countdown -= 1;
    }
    console.log(countdown);
  }