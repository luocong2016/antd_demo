/**
 * Created by Lutz on 2017/10/27.
 */

import './frozen.css'
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Loading from './Loading'

const hideCallback = () => { alert('done...') }

export default class LoadingDemo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const div = this._div
    //console.log(React.isValidElement(div)) false
    //setTimeout(() => ReactDOM.unmountComponentAtNode(div), 3000) //react产生的节点使用此方法会报错
  }

  render() {
    return (
      <div  ref={div => this._div = div}>
        <div>SO</div>
        <Loading content="Lutz" onHide={hideCallback} />
      </div>
    )
  }
}

