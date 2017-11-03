## React组件
### React创建组件有三种方法
1. 函数定义的无状态组件
2. es5原生方式 React.createClass 定义的组件
3. es6形式的 extends React.Component 定义的组件


### 1. 函数定义的无状态组件(只要有可能，尽量使用无状态组件)
1.1 组件不会被实例化，整体渲染性能得到提升
1.2 组件不能访问this对象
1.3 组件无法访问生命周期的方法
1.4 无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用
```
var React = require('react')
var ReactDOM = require('react-dom')

function HelloComponent(props, context){
  return <div>Hello {props.name}</div>
}

ReactDOM.render(<HelloComponent name="Lutz" />, document.getElementById('root'))
```
### 2. es5原生方式 React.createClass 定义的组件(不推荐)
```
var React = require('react')
var ReactDOM = require('react-dom')

var InputControlES5  = React.createClass({
  propType: { //定义传入props中的属性类型
    initialValue: React.PropTypes.string
  },
  defaultProps: { //组件默认props
    initialValue: ''
  },
  getInitialState: function(){ //组件state
    return { text: this.props.initialValue || 'placeholder'}
  },
  handleChange: function(event){
    this.setState({ text: event.target.value })
  },
  render: function(){
    return (<div>
      Type something: <input onChange={this.handleChange} value={this.state.text} />
    </div>)
  }
})
```
### 3. es6形式的 extends React.Component 定义的组件
```
import React from 'react'
import ReactDOM from 'react-dom'

export default class ES6React extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    open: false,
  }

  static propTypes = {
    open: PropTypes.bool.isRequired,
  }

  handleClick(event) {
    event.preventDefault();
    this.forceUpdate();
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.refs.div); // 获取节点document.getElementById('div')
  }

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!');
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!');
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!');
  }

  render() {
    const { hi = 'hi', openBool = true } = this.state;
    const { open = true } = this.props;

    return (<div ref="div">
      <input type="text" disabled={!openBool} placeholder={`open:${open}`} />
    </div>);
  }
}
```
