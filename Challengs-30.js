// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


//#solution

function fearNotLetter(str) {
  const arr = str.split('').map(letter=>letter.charCodeAt(0)
  );

  for(let i=0;i<arr.length-1;i++){
    if(arr[i]+1 !== arr[i+1]){
      return String.fromCharCode(arr[i]+1)
    }
  }
  return undefined;
}

fearNotLetter("abce");