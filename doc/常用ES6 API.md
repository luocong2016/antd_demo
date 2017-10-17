1. for...of
```
let obj = {
  first: 'Lutz',
  last: 'Hello',
}
for(let key of Object.keys(obj)){
   console.log(obj[key])
}
```

2. find
```
let arr = [
{
  a: 'A',
  b: 'B',
}, {
  a: 'C',
  b: 'D',
}];

arr.find(function(items){
  if(items['a'] == 'C'){
    return 'C';
  }
})
```

-- 类似
```
let arr = [1,2,33,2,3,,4,45];
arr.sort() //[1, 2, 2, 3, 33, 4, 45, empty × 1] -> length=8
arr.sort(function(a, b){return a -b;}) //[1, 2, 2, 3, 4, 33, 45, empty × 1] -> length=8  <-> arr
```
