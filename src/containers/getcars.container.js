import React, { Component, PropTypes } from 'react';
import MapContainer from '../components/Map/index';
import { fetchCar2GoCars } from '../store/Car/actions';
import { connect } from 'react-redux';

class GetCarsContainer extends Component {

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

GetCarsContainer.propTypes = {
  markers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    markers: state.car.markers,
  };
}

export default connect(mapStateToProps)(GetCarsContainer);
