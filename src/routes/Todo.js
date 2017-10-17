/**
 * Created by Lutz on 2017/9/22.
 */
import React from 'react';
import { connect } from 'dva';
import { Avatar, Badge, DatePicker, message } from 'antd';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    if (!date) {
      this.setState({ date: '' });
      return;
    }
    message.info(`您选择的日期是: ${date.toLocaleString()}`);
    this.setState({ date: date.toLocaleString() });
  }
  render() {
    const { date } = this.state;
    const _this =this;
    console.log(this.props)
    return (
      <div style={{ margin: '50px' }}>
        <div>
          <Badge count={2017} overflowCount={20000}>
            <Avatar icon="user" />
          </Badge>
          <Badge dot>
            <Avatar>U</Avatar>
          </Badge>
          <Avatar shape="square">USER</Avatar>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
          <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        </div>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>当前日期：{ date.toLocaleString() }</div>
        <div>
          <h1>mock.js数据</h1>
          {JSON.stringify(_this.props.todo)}
        </div>
      </div>
    );
  }
}

// export default Products;
export default connect(({ todo }) => ({ todo }))(Todo);
