// Code your solutions in this file


function writeCards(namesArray, adj) {
  let thanksArray = [];
  for (let i = 0; i < namesArray.length; i++) {
    thanksArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${adj} gift!`)
  }
  return thanksArray
}


function countDown(amt) {
  let i = amt
  while (i >= 0) {
    console.log(i)
    i -= 1
  }
}