const a = [12,6,47,58,31,25,44];
const b = [45,23,65,98,75,43];
const c = [2,5,3,6,9];
const nums = [...a, ...b,120, ...c];
const maximum = Math.max(...nums);
console.log(nums);
console.log(maximum);