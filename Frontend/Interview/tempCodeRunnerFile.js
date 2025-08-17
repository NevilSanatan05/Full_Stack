let arr = [2,4,12,6,3];
let ans = [];
for(let i = 0;i<arr.length-1;i++){
  for(let j =i+1; j< arr.length;j++){
    if(arr[i]+arr[j]==12){
      ans.push([arr[i], arr[j]]);
    }
  }
}
console.log(ans);
