/**
 * Created by Lutz on 2017/10/24.
 */
import React from 'react';
import { Transfer } from 'antd';
import { menu } from './constent';

export default class TransferDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mockData: menu,
      targetKeys: [],
    };
  }
  componentDidMount() {}
  filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1
  handleChange = (targetKeys) => { this.setState({ targetKeys }); }

  renderItem = (item) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );

    return {
      label: customLabel, // for displayed item
      value: item.title, // for title and filter matching
    };
  }
  render() {
    return (<Transfer
      dataSource={this.state.mockData}
      targetKeys={this.state.targetKeys}
      showSearch
      listStyle={{
        width: 400,
        height: 500,
      }}
      filterOption={this.filterOption}
      onChange={this.handleChange}
      rowKey={record => record.key}
      render={this.renderItem}
    />);
  }
}
