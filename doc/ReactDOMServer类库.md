# ReactDOMServer类库

## 1. 渲染为HTML
> string renderToString(ReactElement element)

### Demo
```
import ReactDOMServer from 'react-dom/server'

const html = ReactDOMServer.renderToString(
  <div class="divider">
    <h2>Lutz</h2>
  </div>
)

document.querySelector('#app').innerHTML = html
```

## 2. 渲染为静态HTML
> string renderToStaticMarkup(ReactElement element)

### Demo
```

import ReactDOMServer from 'react-dom/server'
import React,{PropType} from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  static PropTypes = {}
  
  render(){
    return (<div>Lutz</div>)
  }
}

ReactDOMServer.renderToStaticMarkup(App)
```
