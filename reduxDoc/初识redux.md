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
