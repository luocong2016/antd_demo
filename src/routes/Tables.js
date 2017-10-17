/**
 * Created by Lutz on 2017/9/22.
 */
import React from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { list: data } = this.props.table
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '40%',
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '30%',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return <Table columns={columns} rowSelection={rowSelection} dataSource={data} />;
  }
}

export default connect(({ table }) => ({ table }))(Tables);
