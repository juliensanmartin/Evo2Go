import React, { Component, PropTypes } from 'react';
import { MapContainer } from '../components/Map/index';
import { fetchCar2GoCars } from '../store/Car/actions';
import { connect } from 'react-redux';

class GetCars extends Component {

  constructor(props) {
    console.log('huhu');
    super(props);
  }

  componentDidMount() {
		const { dispatch } = this.props;
    dispatch(fetchCar2GoCars());
  }

  render() {
    return (
      <MapContainer markers={this.props.markers}/>
    );
  }
}

GetCars.propTypes = {
  markers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    markers: state.car.markers,
  };
}

export default connect(mapStateToProps)(GetCars);
