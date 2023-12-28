// 1.b Convert all the strings to title caps in a string array  using anonymous function


const str = "hello everyone good morning";
const res = function(str)
{
  str = str.split(" ") ;
  for( let i = 0; i < str.length; i++)
  {
    str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
  }
  return str.join(" ");
  
}
console.log(res(str));
