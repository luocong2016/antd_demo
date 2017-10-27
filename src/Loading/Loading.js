/**
 * Created by Lutz on 2017/10/27.
 */
import './frozen.css'
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styleMaps from './styleMaps'

const loadingCN = styleMaps.loadingCN

export default class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static PropTypes = {
    isPart: PropTypes.bool, //是否局部加载
    onHide: PropTypes.func, //组件卸载后的调用
    content: PropTypes.string //展示内容
  }

  componentWillUnmount() {
    if (typeof this.props.onHide === 'function') {
      setTimeout(this.props.onHide, 10)
    }
  }

  render() {
    const { content = '正在加载中...' } = this.props
    const flag = this.props.isPart ? 'partial' : 'global'
    const component = (
      <div className={loadingCN.wrap[flag]}>
        <div className={loadingCN.wrap[flag]}>
          <i className={loadingCN.i[flag]}></i>
          <p>{content}</p>
        </div>
      </div>
    )
    return component
  }
}
