```
import React, {PropTypes} from 'react'

export default class NotesList extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ol>
        {/* this.props.children */}
        {React.Children.map(this.props.children,  child => <li>{child}</li>)}
      </ol>
    )
  }
}

{/*
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>
*/}

```
# React.Children类
## 1. 遍历子元素，返回一个新的子元素集合
```
React.Children.map(objectChildren, Func [,objectThisArg])
```
> React.Children.map(this.props.children, child => console.log(child))

## 2. 遍历子元素
```
React.Children.forEach(objectChildren, Func [,objectThisArg])
```
> React.Children.forEach(this.props.children, child => console.log(child))

## 3. 返回子元素的总数
```
React.Children.count(objectChildren)
```
> const nums = React.Children.count(this.props.children)

## 4. 返回仅有一个子元素，否则报错且不渲染任何东西
```
React.Children.only(objectChildren)
```
> React.Children.only(this.props.children)

## 5. 将不透明的子组件children转换为一个水平的数组。
```
React.Children.toArray(objectChildren)
```
> React.Children.toArray(this.props.children)
