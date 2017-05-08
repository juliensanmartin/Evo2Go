import React, { Component, PropTypes } from 'react';
import FilterComponent from '../../components/Filter/filter';
import { fetchCar2GoCars, fetchEvoCars } from '../../store/Car/actions';
import { getAllMarkers, isLoaded } from '../../store/Car/selectors';
import { connect } from 'react-redux';

class Filter extends Component {

  // componentDidMount() {
	// 	const { dispatch } = this.props;
  //
  //   // To run in parallel
  //   Promise.all([
  //     dispatch(fetchCar2GoCars()),
  //     dispatch(fetchEvoCars()),
  //   ]);
  // }

  render() {
    return (
      <FilterComponent car2GoSwitchIsOn={this.props.car2GoSwitchIsOn} evoSwitchIsOn={this.props.evoSwitchIsOn}/>
    );
  }
}

Filter.propTypes = {
  evoSwitchIsOn: PropTypes.bool.isRequired,
  car2GoSwitchIsOn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    evoSwitchIsOn: true,
    car2GoSwitchIsOn: false,
  };
}

export default connect(mapStateToProps)(Filter);
