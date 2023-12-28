// 1.h Rotate an array by k times using anonymous function

const arr = [1 , 2 , 3 , 4, 5, 6, 7, 8 , 9 , 10];
const k = 1 ;
const  a = function(arr,k)
 {
   for(let i=0; i<k; i++)
   {
      arr.push(arr[0]);
      arr.shift();
   }
 return arr;
};
console.log(a(arr,k));