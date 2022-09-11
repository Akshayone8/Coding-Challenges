// Two integer numbers are added using the column addition method. When using this method, some additions of digits produce non-zero carries to the next positions. Your task is to calculate the number of non-zero carries that will occur while adding the given numbers.

// The numbers are added in base 10.

// Example

// For a = 543 and b = 3456, the output should be 0

// For a = 1927 and b = 6426, the output should be 2

// For a = 9999 and b = 1, the output should be 4

// Input/Output
// [input] integer a
// A positive integer.

// Constraints: 1 ≤ a ≤ 10^7

// [input] integer b
// A positive integer.

// Constraints: 1 ≤ b ≤ 10^7

// [output] an integer

// #solution


function numberOfCarries(a, b) {
    //coding and coding..
       const lenA = `${a}`.length;
      const lenB = `${b}`.length;
  
      let len = lenA>lenB?lenA:lenB;
      let i = 0;
  
      let carried = 0;
      let totalCarried = 0;
  
      while(i<len){
          const digitA = a%10;
          const digitB = b%10;
  
  
          if(digitA+digitB+carried>9){
              carried=1;
              totalCarried++;
          }else{
              carried=0;
          }
  
          a=Math.floor(a/10);
          b=Math.floor(b/10);
          i++;
      }
      return totalCarried;
    
  }


  numberOfCarries(9999,1);     //4
  numberOfCarries(543,3456);   //0