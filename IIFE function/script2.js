// 1.b Convert all the strings to title caps in a string array  using IIFE function


const res =( function(str)
{
  str = str.split(" ") ;
  for( let i = 0; i < str.length; i++)
  {
    str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
  }
  return str.join(" ");
  
})("hello everyone good morning")
console.log(res);

