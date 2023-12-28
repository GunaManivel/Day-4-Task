// 1.f Return median of two sorted arrays of the same size using IIFE function

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const Median = (function(arr1, arr2) {
  const merged = arr1.concat(arr2).sort((a, b) => a - b);
  const length = merged.length;
  
  if (length % 2 === 0) {
    const mid = length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    const mid = Math.floor(length / 2);
    return merged[mid];
  }
})(arr1,arr2)

console.log(Median);