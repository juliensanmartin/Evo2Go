import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { MapContainer } from './containers/Map/index';
import { fetchCar2GoCars } from './store/Car/actions';
import { connect } from 'react-redux';

// This is used in order to see requests on the Chrome DevTools
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
	GLOBAL.originalXMLHttpRequest :
	GLOBAL.XMLHttpRequest;

class Evo2go extends Component {

  constructor(props) {
    console.log('huhu');
    super(props);
  }

  componentDidMount() {
    dispatch(fetchCar2GoCars());
  }

  render() {
    return (
      <Provider store={store}>
        <MapContainer markers={this.props.markers}/>
      </Provider>
    );
  }
}

Evo2go.propTypes = {
  markers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    markers: state.markers,
  };
}

export default connect(mapStateToProps)(Evo2go);
