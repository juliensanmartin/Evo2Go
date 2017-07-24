import React, { Component, PropTypes } from 'react'
import FilterComponent from '../../components/Filter/filter'
import { setEvoVisibility, setCar2GoVisibility, setBusVisibility, setMobiVisibility, setModoVisibility } from '../../store/Car/actions'
import { getCar2GoVisibility, getEvoVisibility, getBusVisibility, getMobiVisibility, getModoVisibility } from '../../store/Car/selectors'
import { connect } from 'react-redux';

class Filter extends Component {

  showMap() {
    const backAction = NavigationActions.back()
    this.props.navigation.dispatch(backAction)
  }

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
        mobiVisible={this.props.mobiVisible}
        onModoToggle={this.props.onModoToggle}
        modoVisible={this.props.modoVisible}
        onOutsidePress={this.showMap}/>
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
  onMobiToggle: PropTypes.func.isRequired,
  modoVisible: PropTypes.bool.isRequired,
  onModoToggle: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    evoVisible: getEvoVisibility(state),
    car2GoVisible: getCar2GoVisibility(state),
    busVisible: getBusVisibility(state),
    mobiVisible: getMobiVisibility(state),
    modoVisible: getModoVisibility(state)
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
    },
    onModoToggle: (visible) => {
      dispatch(setModoVisibility(visible))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
