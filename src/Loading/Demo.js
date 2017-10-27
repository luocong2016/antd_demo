/**
 * Created by Lutz on 2017/10/27.
 */
import './frozen.css'
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Loading from './Loading'

const hideCallback = () => { alert('done...') }

export default class Demo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  static PropTypes = {
    content: PropTypes.string.isRequired,
    onHide: PropTypes.func
  }

  componentDidMount() {
    const _this = this
    setTimeout(() => ReactDOM.unmountComponentAtNode(_this.findDOMNode()), 3000)
  }

  render() {
    const { content } = this.props
    const component = (<Loading content={content} onHide={this.hideCallback} />)
    return component
  }
}

