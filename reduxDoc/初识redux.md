## Store
3.1 Store
store 就是保存数据的地方，相当于一个容器，整个应用只有一个Store
Redux 提供 createStore 这个函数，用来生成Store
```
import { createStore } from 'redux'
const store = createStore(fn)
```

3.2 State
Store包含所有数据。如果想得到某个时点的数据，就要对Store生成快照。这种时点的数据集合，就叫State
```
import { createStore } from 'redux'
const store = createStore(fn)
const state = store.getState()
```

3.3 Action
Action 是一个对象。其中 type 属性是必须项，标识Action的名称。改变State的唯一办法，就是使用Action
```
const action = {
  type: 'ADD_TODO',
  payload: 'params'
}
```

3.4 Action Creator
```
const ADD_TODO = '添加 TODO'
const addTodo = (text) => {type: ADD_TODO, text}
const action = addTodo('Learn Redux')
```

3.5 store.dispatch()
该方法是VIEW发出Action 的唯一方法
```
import { createStore } from 'redux'
const store = createStore(fn)
store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
})

//结合Action Creator
store.dispatch(addTodo('Learn Redux'))
```

3.6 Reducer
Store 收到 Action 后，必须给出一个新的State,这样 View 才会发生变化。这种 State 的计算过程叫做 Reducer
Reducer 是一个函数，接受 Action 和当前 State 作为参数，返回一个新的 State
```
const reducer = (state, action) => {
  //...
  return new_state
}
```
整个应用的初始状态，可以作为 State 的默认值。下面是一个实际的例子。
```
const defaultState = 0
const reducer = (state = defaultState, action) => {
  switch(action.type){
    case: 'ADD':
      return state + action.payload
    default:
      return state
  }
}

const state = reducer(1, {
  type: 'ADD',
  payload: 2
})
```
在实际应用中 Reducer 函数不用像上面一样手动调用， store.dispatch 方法会触发 Reducer 的自动执行。
```
import { createStore } from 'redux'
const store = createStore(reducer)
```
createStore接受 Reducer 作为参数，生成一个新的 Store。以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。

```
const actions = [
  { type: 'ADD', payload: 0 },
  { type: 'ADD', payload: 1 },
  { type: 'ADD', payload: 2 },
]
const total = actions.reduce(reducer, 0) //3
```
上面代码，actions 数组表示依次有3个Action, 分别加 0, 1, 2。数组的reduce 方法接受Reduce函数作为参数，就可以直接得到最终状态3

3.7 纯函数
Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。
纯函数是函数编程概念，遵循下列规则：
```
 不得写成参数
 不能调用系统 I/O 的API
 不能调用Date.now() 或 Math,random() 等不纯的方法，因为每次都会得到不同的结果
```

```
//State 是一个对象
const reducer = (state, action) => {
  return Object.assign({}, state, {thingToChange}) // 或 return { ...state, ...newState }
}

//State 是一个数组
const reducer = (state, action) => {
  return [...state, newItem]
}
```

3.8 store.subscribe()
Store 允许使用 store.subscribe 方法设置监听函数，一旦State改变发生，就自动自行这个函数
```
import { createStore } from 'redux'

const store = createStore(reducer)

store.subscribe(listener)
```
store.subscribe 方法返回一个函数，调用这个函数就可以解除监听
```
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

unsubscribe()
```

## Store的实现
- store.getState()
- store.dispatch()
- store.subscribe()

```
import { createStore } from 'redux'
const { getState, dispatch, subscribe} = createStore(reducer)
```
createStore方法还可以接收第二个参数，标识State的最初状态。通常是服务器给出的。
```
const store = createStore(todoAPP, window.STATE_FROM_SERVER)
```
