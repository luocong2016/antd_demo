/**
 * Created by Lutz on 2017/11/6.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import showdown from 'showdown'
import Styles from './Markdown.less'

const converter = new showdown.Converter

export default class Markdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    e.target.value != null && this.setState({text: e.target.value})
  }

  render() {
    const { text } = this.state
    return (<div className={Styles.container}>
      <div className={Styles['container-left']}>
        <textarea onChange={this.handleChange} className={Styles['container-textArea']}></textarea>
      </div>
      <div  className={Styles['container-right']} dangerouslySetInnerHTML={{__html: converter.makeHtml(text)}}></div>
    </div>)
  }
}
