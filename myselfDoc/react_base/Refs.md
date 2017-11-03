## React Refs
React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
```
import React from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  handleClick(event){
    event.preventDefault()
    this.refs.myInput.focus() //使用原生的DOM API获取焦点
  }
  
  render(){
    return (<div>
      <input type="text" ref="myInput" />
      <input
        type="button"
        value="点我输入框获取焦点"
        onClick={this.handleClick}
      />
    </div>)
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))
```
