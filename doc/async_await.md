React 适用async的生命周期函数要满足两个条件
1. 要在render函数之后执行
2. React不关心这个生命周期的函数

所以适用的只有：
> componentDidUpdate/componentDidMount
```
async componentDidMount(){
  const res = await fetch('https://api.github.com/repos/facebook/react')
  const json = await res.json()
  this.setState({reactStargazersCount: json.stargazers_count})
}
```

## componentWillMount 理论上也可以执行anync，React会因为异步处理componentWillMount，React只会调用componentWillMout一次，而后该函数才会执行，但React不会等待这个函数

```
import React from 'react'

export default class Demo extends React.Component{
  contructor(props){
    super(props)
    this.state = {
      reactStargazersCount: '',
      reduxStargazersCount: ''
    }
  }
  
  async componentWillMount(){
    console.log('componentWillMount')
    const res = await fetch('https://api.github.com/repos/reactjs/redux')
    console.log('after: componentWillMount')
    const json = await res.json()
    console.log('json:')
    this.setState({reduxStargazersCount: json.stargazers_count})
  }
  
  async componentDidMount(){
    console.log('componentDidMount')
    const res = await fetch('https://api.github.com/repos/facebook/react')
    console.log('after: componentDidMount')
    const json = await res.json()
    console.log('json:')
    this.setState({reactStargazersCount: json.stargazers_count})
  }
  
  async shouldComponentUpdate(){
    console.log('sholdComponentUpdate')
    return false
  }
  
  
  render(){
    console.log('render')
    const { reactStargazersCount='', reduxStargazersCount='' } = this.state
    return (<div>
      <div>React stargazers count: {this.state.reactStargazersCount}</div>
      <div>Redux stargazers count: {this.state.reduxStargazersCount}</div>
    </div>)
  }
}
```
