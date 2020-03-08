import React, {Component} from 'react';
import Main from './src/screens/main';
import {Provider} from 'react-redux';
import stores from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = stores();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
