import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import GetCarsContainer from './containers/getcars.container';

// This is used in order to see requests on the Chrome DevTools
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
	GLOBAL.originalXMLHttpRequest :
	GLOBAL.XMLHttpRequest;

export default class Evo2go extends Component {
  render() {
    return (
      <Provider store={store}>
        <GetCarsContainer />
      </Provider>
    );
  }
}
