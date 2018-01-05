import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  // state: for testing
  // state = {
  //   show: true
  // }

  // // for testing
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000)
  // }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
          {/* <BurgerBuilder /> */}
          {/* for testing on WillMount */}
          {/* {this.state.show ? <BurgerBuilder /> : null} */}
          {/* <Checkout /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
