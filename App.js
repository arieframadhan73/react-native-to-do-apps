/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import Main from './app/components/main';
import SplashScreen from './app/components/splashScreen';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 4000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.loadingFunction();
    }
  }
  loadingFunction() {
    this.setState({loading: false});
  }
  render() {
    if (this.state.loading) {
      return <SplashScreen />;
    }
    return (
      <Fragment>
        <Main />
      </Fragment>
    );
  }
}

export default App;
