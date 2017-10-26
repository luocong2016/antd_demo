/**
 * Created by Lutz on 2017/10/26.
 */

import React from 'react'
import { Button } from 'antd'
import { wrapComponent } from './wrapComponent.js'
const WapComponent = wrapComponent(Button)


export default class Btn extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        222
        <WapComponent onClick={() => console.log(1)}>
          <div style={{ width: '100px', height: '200px', border: '1px solid red' }}>span</div>
            title
        </WapComponent>
      </div>
    )
  }
}
