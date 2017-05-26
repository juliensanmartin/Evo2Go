import React, { Component, PropTypes } from 'react';
import FilterComponent from '../../components/Filter/filter';
import { setVisibilityFilter } from '../../store/Car/actions';
import { getAllMarkers, isLoaded } from '../../store/Car/selectors';
import { connect } from 'react-redux';

class Filter extends Component {
  render() {
    return (
      <FilterComponent
        car2GoSwitchIsOn={this.props.car2GoSwitchIsOn}
        evoSwitchIsOn={this.props.evoSwitchIsOn}
        onFilterToggle={this.props.onFilterToggle}/>
    );
  }
}

Filter.propTypes = {
  evoSwitchIsOn: PropTypes.bool.isRequired,
  car2GoSwitchIsOn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  onFilterToggle: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    evoSwitchIsOn: true,
    car2GoSwitchIsOn: false,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onFilterToggle: (id) => {
      dispatch(setVisibilityFilter(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
