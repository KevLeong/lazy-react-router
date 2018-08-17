import React from 'react';
import { Route } from 'react-router-dom';

const LazyRoute = ({ load, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      <LoadComponent load={load} {...props} />
    }
  />
);

class LoadComponent extends React.Component {
  state = {
    Component: null,
  };
  componentWillMount() {
    this.props.load().then(({ default: Component }) => {
      this.setState({ Component });
    });
  }
  render() {
    const { Component } = this.state;
    return Component ? <Component /> : null;
  }
}

export default LazyRoute;
