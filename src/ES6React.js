/**
 * Created by Lutz on 2017/11/2.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class ES6React extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      open: true,
    };
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
    this.setState({ open: !this.state.open });
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
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
    return (<div>
      {JSON.stringify(this.props)}
    </div>);
  }
}
