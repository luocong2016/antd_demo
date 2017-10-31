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

3.7 Reducer
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
