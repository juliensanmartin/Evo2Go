import React, { Component, PropTypes } from 'react'
import CarDetailsComponent from '../../components/CarDetails/car-details'
import { fetchDistance, fetchDirection } from '../../store/Distance/actions'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class CarDetails extends Component {
  constructor() {
    super()
    this.showDirectionOnMap = this.showDirectionOnMap.bind(this)
  }

  showDirectionOnMap() {
    const backAction = NavigationActions.back()
    this.props.navigation.dispatch(backAction)
  }

  componentWillMount() {
    const {currentPosition, marker} = this.props.navigation.state.params
    Promise.all([
      this.props.dispatch(fetchDistance(currentPosition, marker.latlng)),
      this.props.dispatch(fetchDirection(currentPosition, marker.latlng))
    ])
  }

  render() {
    return (
      <CarDetailsComponent
        marker={this.props.navigation.state.params.marker}
        distance={this.props.distance}
        onDirectionPress={this.showDirectionOnMap}/>
    )
  }
}

CarDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    distance: state.distance.distance
  }
}

export default connect(mapStateToProps)(CarDetails)
