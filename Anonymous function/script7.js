//1.g Remove duplicates from an array using anonymous function


const arr = [12 , 20 , 12 , "A" , "B" ,"A" , 4 , 5 , 6];
const removedublicate = function(arr) {
    let ans=[];
    ans = arr.filter((a,b)=> arr.indexOf(a) == b)
    return ans;
}
console.log(removedublicate(arr))