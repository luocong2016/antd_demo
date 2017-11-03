# ReactDOM类库
## 1. 渲染ReactElement
> ReactDOM.render
```
ReactComponent render(
  ReactElement element,
  DOMElement container,
  [function callback]
)
```
### Demo
```
import React,{PropType} from 'react'
import ReactDOM from 'react-dom'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  static defaultProps = {}
  
  static propTypes = {}
  
  render(){
    <div>{this.props.children}</div>
  }
}

const reactEle = ReactDOM.render(<App>Lutz</App>, document.querySelector('#app'), () => console.log('rendered done'))
```
## 2. 移除组件
```
boolean unmountComponentAtNode(DOMElement container)
```
### Demo
```
const bool = ReactDOM.unmountComponentAtNode(document.querySelector('#app'))
console.log(bool) //true or false
```

## 3.查找节点
```
DOMElement findDOMNode(ReactComponent component)
```
### Demo
```
const reactEle = ReactDOM.render(<App>Lutz</App>, document.querySelector('#app'), () => console.log('rendered done'))
const element = ReactDOM.findDOMNode(reactEle)
```
