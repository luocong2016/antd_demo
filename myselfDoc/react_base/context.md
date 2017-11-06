## context
```
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Button extends React.Component{
  constructor(props, context){
    super(props, context)
    this.state = {}
  }
  
  static propTypes = {
    children: PropTypes.string.isRequired
  }
  
  static contextTypes = {
    color: PropTypes.string.isRequired
  }
  
  render(){
    return <button style={{background: context.color}}>{this.props.children}</button>
  }
}

class Message extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  
  render(){
    return (<li>
      <p>{this.props.text}</p>
      <Button>Delete</Button>
    </li>)
  }
}

export default class MessageItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  render(){
    const message = [{text: 'Hello React'}, {text: 'Hello Redux'}]
    
    return (<div>
      <p>通过props将color逐层传递给Button组件</p>
      { message.map((item, index) => <Message key={`list-${index}`} text={item.text}/>) }
    </div>)
  }
}

```
