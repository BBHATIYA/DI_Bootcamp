import React from "react";

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorMessage: null,
    };
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <h1>An error has occured</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
