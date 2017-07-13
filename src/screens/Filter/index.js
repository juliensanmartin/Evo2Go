import React, { Component, PropTypes } from 'react'
import FilterComponent from '../../components/Filter/filter'
import { setEvoVisibility, setCar2GoVisibility, setBusVisibility, setMobiVisibility } from '../../store/Car/actions'
import { getCar2GoVisibility, getEvoVisibility, getBusVisibility, getMobiVisibility } from '../../store/Car/selectors'
import { connect } from 'react-redux';

class Filter extends Component {
  render() {
    return (
      <FilterComponent
        car2GoVisible={this.props.car2GoVisible}
        evoVisible={this.props.evoVisible}
        onEvoToggle={this.props.onEvoToggle}
        onCar2GoToggle={this.props.onCar2GoToggle}
        onBusToggle={this.props.onBusToggle}
        busVisible={this.props.busVisible}
        onMobiToggle={this.props.onMobiToggle}
        mobiVisible={this.props.mobiVisible}/>
    )
  }
}

Filter.propTypes = {
  evoVisible: PropTypes.bool.isRequired,
  car2GoVisible: PropTypes.bool.isRequired,
  onEvoToggle: PropTypes.func.isRequired,
  onCar2GoToggle: PropTypes.func.isRequired,
  busVisible: PropTypes.bool.isRequired,
  onBusToggle: PropTypes.func.isRequired,
  mobiVisible: PropTypes.bool.isRequired,
  onMobiToggle: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    evoVisible: getEvoVisibility(state),
    car2GoVisible: getCar2GoVisibility(state),
    busVisible: getBusVisibility(state),
    mobiVisible: getMobiVisibility(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onEvoToggle: (visible) => {
      dispatch(setEvoVisibility(visible))
    },
    onCar2GoToggle: (visible) => {
      dispatch(setCar2GoVisibility(visible))
    },
    onBusToggle: (visible) => {
      dispatch(setBusVisibility(visible))
    },
    onMobiToggle: (visible) => {
      dispatch(setMobiVisibility(visible))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
