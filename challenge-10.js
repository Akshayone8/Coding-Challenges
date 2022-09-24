// Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False
                   
//         --> ['a','b','d']
    
// 'DIGEST'--> ['D','I','E','T']

// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

// #solution

function moreZeros(s){
  return s.split('')
  .filter(removeDoubles)
  .map(convertToAscii)
  .map(convertToBinary)
  .filter(areMoreZeros)
  .map(convertToDecimal)
  .map(convertToChar)

}

function removeDoubles(item,idx,arr){
  return arr.indexOf(item)===idx
}


function convertToAscii(c){
  return c.charCodeAt(0)
}



function convertToBinary(num){
  return num.toString(2)
}

function areMoreZeros(str){
  const zeros = str.replace(/1/g,'').length;
  const ones = str.replace(/0/g,'').length;
  return zeros > ones;
}

function convertToDecimal(bi){
  return parseInt(bi,2)
}

function convertToChar(num){
  return String.fromCharCode(num)
}
