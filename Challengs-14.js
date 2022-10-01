// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


// #solution 

function cleanString(str) {
    let result = [];
    for(let i=0;i<str.length;i++){
      const char = str[i];
      if(char === '#'){
        result.pop()
      }else{
        result.push(char)
      }
      
    }
    return result.join('');
  }



cleanString('abc#d##c')