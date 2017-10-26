/**
 * Created by Lutz on 2017/10/26.
 */
import React from 'react'
import PropType from 'prop-types'

export const wrapComponent = ComposedComponent => class WrapComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  static propTypes = {
  }

  render(){
    if(this.props){
      console.log(this)
      return <ComposedComponent { ...this.props }>{this.props.children}</ComposedComponent>
    }
    return false
  }
}
