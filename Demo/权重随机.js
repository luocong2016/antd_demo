/*
* 最近项目中需要实现一个基于权重的抽奖功能。例如抽中物品1的权重为2，抽中物品2的权重1。那么，物品1的概率就是1/3，物品2的概率就是2/3。
 实现的主要思想，是基于数组实现的。
 如下程序所示：如1的权重为1，则在数组中插入1个1，2的权重为2，则插入两个2。再对数组[1,2,2]进行随机拿去，就能实现基于权重的随机数了。
* */
function weightRandom(curVal = 0) {
  const randomConfig = [{id:1,weight:2},{id:2,weight:1}] //weight 相当于randomList中 id 出现的次数
  let randomList = [] //如1的权重为2，则插入2个； 2的权重为1,则插入1个
  for (let i in randomConfig) {
    for (let j = 0; j < randomConfig[i].weight; j++) {
      randomList.push(randomConfig[i].id)
    }
  }
  let randomValue = randomList[Math.floor(Math.random() * randomList.length)] //在randomList中随机选取一个
  if (curVal != 0) {
    while (randomValue == curVal) { //避开固定参数比如：2的出现weightRandom(2)
      randomValue  = randomList[Math.floor(Math.random() * randomList.length)]
    }
  }
  //console.log(randomValue)
  return randomValue
}

//weightRandom()
