/**
 * Created by Lutz on 2017/11/2.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class ES6React extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    open: false,
  }

  static propTypes = {
    open: PropTypes.bool.isRequired,
  }

  handleClick(event) {
    event.preventDefault();
    this.forceUpdate();
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.refs.div); // 获取节点document.getElementById('div')
  }

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!');
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!');
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!');
  }

  render() {
    const { hi = 'hi', openBool = true } = this.state;
    const { open = true } = this.props;

    return (<div ref="div">
      <input type="text" disabled={!openBool} placeholder={`open:${open}`} />
    </div>);
  }
}
/* ReactDOM.render(<ES6React />, document.getElementById('container')) */
