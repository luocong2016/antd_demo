## React 组件生命周期
### 组件的生命周期可分成三个状态：
- Mounting：已插入真实 DOM
- Updating：正在被重新渲染
- Unmounting：已移出真实 DOM

![React生命周期](https://github.com/luocong2016/antd_demo/blob/master/src/assets/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)

```
import React from 'react'
import ReactDOM from 'react-dom'

export default class ES6React extends React.Component {
  constructor(props, context) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  static defaultProps = {
    open: false
  }

  static propTypes = {
    open: PropTypes.bool.isRequired
  }

  handleClick(event) {
    event.preventDefault()
    this.forceUpdate()
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
    console.log(this.refs.div) // 获取节点document.getElementById('div')
  }

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }

  shouldComponentUpdate(newProps, newState) {
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  render() {
    const { hi = 'hi', openBool = true } = this.state
    const { open = true } = this.props

    return (<div ref="div">
      <input type="text" disabled={!openBool} placeholder={`open:${open}`} />
    </div>)
  }
}
```
