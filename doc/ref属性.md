### 新版本的React已经不推荐我们使用ref string转而使用ref callback
```
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <div ref={div => {this._div = div}}>app</div>
        <Child ref={child => this._child = child}/>
        <button 
          onClick={()=> {  
            console.log(ReactDOM.findDOMNode(this._div) === this._div)
            console.log(ReactDOM.findDOMNode(this._child))
           }}
         >
         log refs</button>
      </div>
    )
  }
}

ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this._div))
```
