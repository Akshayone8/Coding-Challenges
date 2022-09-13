// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


const letters={};
function isPangram(string){
  //...
  for(let i=97;i<=122;i++){
    letters[String.fromCharCode(i)]=0;
    
  }
  
  string.split('').forEach(l=>{
    l=l.toLowerCase();
    if(letters[l] !== undefined){
      letters[l]++;
    }
  })
  
  return Object.values(letters).every(v=>v>0)
}


isPangram("The quick brown fox jumps over the lazy dog.")
