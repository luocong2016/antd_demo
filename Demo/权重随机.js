/*
例如抽中物品1的权重为2，抽中物品2的权重1。那么，物品1的概率就是1/3，物品2的概率就是2/3。
  实现的主要思想，是基于数组实现的。
如下程序所示：
  如1的权重为1，则在数组中插入1个1，2的权重为2，则插入两个2。再对数组[1,2,2]进行随机拿去，就能实现基于权重的随机数了。
*/

//数组去重
function noRepeat(arr = []){
  if(!Array.isArray(arr)){//不是数组返回空数组
    return []
  }
  let map={}
  for(let i=arr.length; i>=0; --i){
    if(arr[i] in map){ //如果不存在会返回 false
      arr.splice(arr[i],1) //存在抛出数组元素
    }else{
      map[arr[i]] = true;
    }
  }
  return arr;
}

//判断数组元素是否相等
function eq(arr1 = [], arr2 = []){
  arr1 = arr1.sort((a, b) => a - b)
  arr2 = arr2.sort((a, b) => a - b)

  arr1 = noRepeat(arr1)
  arr2 = noRepeat(arr2)

  if(!(arr1 == arr2) && JSON.stringify(arr1) == JSON.stringify(arr2)){
    return true
  }

  return false
}

//随机生成对应的id
function weightRandom(curVal = [], randomConfig =[{id:1,weight:2},{id:2,weight:1}]) {//weight 相当于randomList中 id 出现的次数
  let randomList = [] //如1的权重为2，则插入2个； 2的权重为1,则插入1个
  for (let i in randomConfig) {
    for (let j = 0; j < randomConfig[i].weight; j++) {
      randomList.push(randomConfig[i].id)
    }
  }
  if(eq(curVal, randomList)){ //如果都没禁用就会调用
    console.log('奖品都给胖子拿走了。')
    return
  }

  let randomValue = randomList[Math.floor(Math.random() * randomList.length)] //在randomList中随机选取一个
  if (curVal.length) {
    while (curVal.indexOf(randomValue) != -1) { //禁用固定参数，比如：2的出现weightRandom([2])
      randomValue  = randomList[Math.floor(Math.random() * randomList.length)]
    }
  }
  console.log(randomValue)
  return randomValue
}

weightRandom([1])
