import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ErrorBoundary.scss";
import ErrorDetiles from "./_errorDetiles";

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      openErrorDetiles: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
    console.error("ErrorBound : ", error);
    console.error("ErrorBound info: ", errorInfo);
  }
  openErrorDetiles = (prevState) => {
    this.setState({
      openErrorDetiles: !this.state.openErrorDetiles,
    });
  };
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-message">
          <h2>Something went wrong.</h2>
          <div className="error-text">
            {this.state.error && this.state.error.toString()}
            <hr />
            {this.state.errorInfo && (
              <ErrorDetiles errInfo={JSON.stringify(this.state.errorInfo)} />
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
