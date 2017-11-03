## React State(状态)
React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
```
import React from 'react'
import ReactDOM from 'react-dom'

export default class LikeButton extends React.Component{
    constructor(props, context) {
      super(props)
      this.state = { liked: false }
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event){
      event.preventDefault()
      this.setState({ liked: !this.state.liked})
    }
    
    render(){
      const text = this.state.liked ? '喜欢': '不喜欢'
      return <p onClick={this.handleClick}>你<b>{text}</b>我,点击切换状态</p>
    }
}
```
