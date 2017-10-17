1. for...of
```
let obj = { first: 'Lutz', last: 'Hello'}
for(let key of Object.keys(obj)){
   console.log(obj[key])
}
```

2. find
```
let arr = [{ a: 'A', b: 'B' }, { a: 'C', b: 'D' }];
arr.find(items => { if(items['a'] == 'C'){ return items; } });
```

3. filter
> var new_array = arr.filter(callback[, thisArg])
```
callback
用来测试数组的每个元素的函数。
    调用时使用参数 (element, index, array)。
      element: 元素的值
      index: 元素的索引
      array: 被遍历的数组
返回true表示保留该元素（通过测试），false则不保留。

thisArg
可选。执行 callback 时的用于 this 的值。

let arr = [1, 2, 3, 5, 4, 7, 9];
arr.filter(item => {if(item%2 == 0){ return item;}});
```
4. reduce
```
let arr = [1, 2, 3, 5, 4, 7, 9];
arr.reduce((a, b) => a + b); //31
```

## 类似
```
let arr = [1,2,33,2,3,,4,45];
arr.sort(); //[1, 2, 2, 3, 33, 4, 45, empty × 1] -> length=8
arr.sort((a, b) => a -b); //[1, 2, 2, 3, 4, 33, 45, empty × 1] -> length=8  <-> arr
```
