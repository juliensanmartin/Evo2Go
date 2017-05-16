import React, { Component, PropTypes } from 'react';
import MapComponent from '../../components/Map/map';
import { fetchCar2GoCars, fetchEvoCars } from '../../store/Car/actions';
import { getAllMarkers, isLoaded } from '../../store/Car/selectors';
import { connect } from 'react-redux';

class MapScreen extends Component {

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
      <MapComponent markers={this.props.markers} loading={this.props.loading}/>
    );
  }
}

MapScreen.propTypes = {
  markers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    markers: getAllMarkers(state),
    loading: !isLoaded(state),
  };
}

export default connect(mapStateToProps)(MapScreen);