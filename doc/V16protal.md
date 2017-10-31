## 为什么React需要传送门
> render到一个组件里面去，实际改变的是网页上另一处DOM结构


在V16之前，实现“传送门”，要用到两个React API
- unstable_renderSubtreeIntoContainer
- unmountComponentAtNode

### React V16之前
```
import React from 'react'
import { unstable_renderSubtreenIntoContainer, umountComponentAtNode } from 'react-dom'

export default class Dialog extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    const doc = self.documnet
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
    
    this.renderPortal(this.props)
  }
  
  componentWillUnmount(){
    unmountComponentAtNode(this.node)
    self.document.body.removeChild(this.node)
  }
  
  renderPortal(props){
    unstable_renderSubtreeIntoContainer(
      this, // 当前组件
      <div class="dialog">
        {props.children}
      </div>, // 进入传送门的jsx
      this.node // 传送门另一端的DOM节点
    )
  }
  
  render (){
    return false
  }
}
```

### 存在缺陷: v16之前的React Portal实现方法，有一个小小的缺陷，就是Portal是单向的，内容通过Portal传到另一个出口，在那个出口DOM上发生的事件是不会冒泡传送回进入那一端的。
```
<div onClick={onDialogClick}>
  <Dialog>
    What ever shit
  </Dialog>
</div>
```
> 也就是 onDialogClick 不会被触发


### React V16 Portal支持
```
import React from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    const doc = self.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }
  
  componentWillUnmount(){
    self.document.body.removeChild(this.node)
  }
  
  render(){
    return createPortal(
      <div class="dialog">
        {this.props.children}
      </div>,
      this.node
    )
  }
}
```
