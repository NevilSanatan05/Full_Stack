// let arr = [2,4,12,6,3];
// let ans = [];
// for(let i = 0;i<arr.length-1;i++){
//   for(let j =i+1; j< arr.length;j++){
//     if(arr[i]+arr[j]==10){
//       ans.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(ans);

// console.log(isNaN("Ejaj"));

// let str1 = "Ejaz";
// let str2 = "Developer";
// let ans = "";

// let maxLength = Math.max(str1.length, str2.length);

// for (let i = 0; i < maxLength; i++) {
//   if (i < str1.length) {
//     ans += str1[i];   // take char from str1
//   }
//   if (i < str2.length) {
//     ans += str2[i];   // take char from str2
//   }
// }

// console.log(ans);

let fruits = ["Apple", "Banana", "Cherry"];
fruits.map((fruit, index) => {
  console.log(`Index: ${index}, Fruit: ${fruit}`);
});

const numbers = [1, 2, 3, 4, 5];
numbers.map((number, index) => {
  console.log(`Index: ${index},Number/2 : ${number/2}`);
});