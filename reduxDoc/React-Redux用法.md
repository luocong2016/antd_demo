## React-Redux
1. UI 组件有一下几个特征
- 只负责 UI 的呈现，不带有任何业务逻辑
- 没有状态（即不使用this.state这个变量）
- 所有数据都由参数（this.props）提供
- 不使用任何 Redux 的 API

> 因为不含有状态，UI 组件又称为"纯组件"，即它纯函数一样，纯粹由参数决定它的值。
```
const Title = value => <h1>{value}</h1>
```

2. 容器组件
- 负责管理数据和业务逻辑，不负责 UI 的呈现
- 带有内部状态
- 使用 Redux 的 API
React-Redux 规定，所有的 UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。

3. connect()
React-Redux 提供connect方法，用于从UI组件生成容器组件。
```
import { connect } from 'react-redux'
const VisibleTodoList = connect()(TodoList) //通过connect方法自动生成容器组件
```
上面定义的VisibleTodoList 容器组件毫无意义，只是UI组件的一个单纯的包装层。所以需要一下连个信息点：
（1）输入逻辑：外部的数据（即state对象）如何转换为UI组件的参数
（2）输出逻辑：用户发出的动作如何变成Action 对象，从UI组件传出
```
import { connect } from 'react-redux'
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
```
上面代码：connect方法接受两个参数：mapStateToProps 和 mapDispatchToProps。它们定义了UI组件的业务逻辑。
- mapStateToProps: 负责输入逻辑，即将state映射到UI组件的参数（props）
- mapDispatchToProps: 负责输出逻辑，即将用户对UI组件的操作映射到Action

4. mapStateToProps()
建立一个从（外部的）state对象到（UI组件的）props对象的映射关系
作为函数，maoStateToProps 执行后应该返回一个对象，里面的每一个键值对就是一个映射。
```
const getVisibleToddos = (todos, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => return { //(state [,ownProps]) 容器组件的props对象
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
}
```
mapStateToProps 会订阅Store, 每当state 更新的时候都会自动执行，重新计算UI组件参数，从而触发重新渲染
connect 方法可以省略 mapStateToProps 参数，这样UI组件就不会订阅Store

5. mapDispatchToProps() <func | object>
connect 函数第二个参数，用来建立UI组件的参数到 store.dispatch 方法的映射。
> 如果是函数，会得到dispatch 和 ownProps（容器组件的props）两个参数
```
const mapDispatchToProps = (dispatch, ownProps) => return {
  onClick: () => {
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: ownProps.filter
    })
  }
}
```
> 如果是对象,它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator
```
const mapDispatchToProps = {
  onClick: (filter) => {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
```

6. <Provider>组件
```
import { Provider } from 'react-redux'
import { crateStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

```
import React from 'react'
import PropTypes from 'prop-types'

class Provider extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  static PropTypes = {
    childContextType: PropTypes.shape({
      store: PropTypes.object
    })
  }
  
  getChildContext(){
    return {store: this.props.store}
  }
  
  render(){
    return this.props.children
  }
}
```

```
import React from 'react'
import PropTypes from 'prop-types'

class VisibleTodoList extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  static PropTypes = {
    childContextType: PropTypes.shape({
      store: PropTypes.object
    })
  }
  
  componentDidMount(){
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }
    
  render(){
    const props = this.props
    const { store } = this.context
    const state = store.getState()
    
    //...
  }
}
```
