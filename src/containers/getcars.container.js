import React, { Component, PropTypes } from 'react';
import MapContainer from '../components/Map/map';
import { fetchCar2GoCars, fetchEvoCars } from '../store/Car/actions';
import { getAllMarkers } from '../store/Car/selectors';
import { connect } from 'react-redux';

class GetCarsContainer extends Component {

  componentDidMount() {
		const { dispatch } = this.props;

    // To run in parallel
    Promise.all([
      dispatch(fetchCar2GoCars()),
      dispatch(fetchEvoCars()),
    ]);
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
    markers: getAllMarkers(state),
  };
}

export default connect(mapStateToProps)(GetCarsContainer);
