// Code your solutions in this file
//const people = ["Ada", "Brendan", "Ali"]
//const holiday = "birthday"

function writeCards(people, event) {
  let cards = []
  for (let i = 0; i < people.length; i++) {
    cards.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`)
  }
  return cards
}

function countdown(number) {
  while(number > 0) {
    console.log(number)
    number -= 1
  }
  console.log(number)
}
