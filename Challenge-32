// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// #solution


const repl={
  "&":"&amp;",
  "<":"&lt;",
  ">":"&gt;",
  '"':"&quot;",
  "'":"&apos;"
}

function convertHTML(str) {
for( let key in repl){
 const re = new RegExp(key,"g")
 str=str.replace(re,repl[key])
}
return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
