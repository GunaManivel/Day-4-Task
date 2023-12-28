// 1.c Sum of all numbers in an array using IIFE function


const arr = [1 , 2 , 3 , 4, 5, 6, 7 , 8 , 9 , 10]
const res = (function(arr)
{
    let sum = 0;
    for( i=0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
})(arr)
console.log(res);