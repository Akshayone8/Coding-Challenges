// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


// #Solution


function domainName(url){
  //your code here
   return url.replace(/https{0,1}:\/\/|www\./g,'').split('.')[0]
  }

domainName("http://google.com")
