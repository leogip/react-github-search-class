import React, { Component } from 'react';
import { ErrorIndicator } from '../error-indicator/error-indicator';
import { Spinner } from '../spinner/spinner';

const withData = View => {
  return class extends Component {
    state = {
      data: [],
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.getDate !== prevProps.getDate) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({
        loading: true,
        error: false
      });
      this.props
        .getData()
        .then(this.onItemsLoaded)
        .catch(this.onError);
    }

    onItemsLoaded = data => {
      this.setState({ data, loading: false });
    };

    onError = () => {
      this.setState({ loading: false, error: true });
    };

    render() {
      const { data, loading, error } = this.state;

      const errorMessage = error ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spinner /> : null;

      return (
        <>
          {spinner}
          {errorMessage}
          <View {...this.props} data={data} />
        </>
      );
    }
  };
};

export default withData;
