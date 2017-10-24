/**
 * Created by Lutz on 2017/10/24.
 */

import React from 'react';
import { Tree, Input } from 'antd';
import { menu } from './constent';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const loop = (arr = []) => arr.map(item => <TreeNode key={item.key} title={item.title}>{item.children && loop(item.children)}</TreeNode>);

export default class TreeDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect = (selectedKeys, info) => { // 点击树节点触发
    console.log('selected', selectedKeys, info);
  }
  onCheck = (checkedKeys, info) => { // 点击复选框触发
    console.log('onCheck', checkedKeys, info);
  }

  render() {
    return (
      <Tree
        checkable
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        {loop(menu)}
      </Tree>);
  }
}
