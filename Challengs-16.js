// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//Examples 

// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
// Waiting:spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// Waiting:spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
// Waiting:spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
// Waiting:spinalCase("AllThe-small Things") should return the string all-the-small-things.

// #Solution

function spinalCase(str){
  return str.replace(/([A-Z])/g,' $1').trim().split(/[\W_]/).filter(item=>item !== '').map(item=>item.toLowerCase()).join('-');

}

console.log(spinalCase("thisIsSpinalTap"))