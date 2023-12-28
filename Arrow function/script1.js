// 2.a Print odd numbers in an array  using arrow function

const arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
const oddnumbers = (arr) =>
{
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i] % 2 !== 0)
    {
       console.log((arr[i]))
       
    }
}
}
oddnumbers(arr);