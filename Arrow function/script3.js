// 2.c Sum of all numbers in an array using arrow function


const arr = [1 , 2 , 3 , 4, 5, 6, 7 , 8 , 9 , 10]
const res = (arr) =>
{
    let sum = 0;
    for( i=0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(res(arr));