// Code your solutions in this file

function writeCards(names, event_name) {
  let messages = []
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`)
  }
  return messages
}


function countdown(int) {
  let counter = int;
  while (counter >= 0) {
    console.log(counter);
    counter --;
  }
}
