import React, { Component, PropTypes } from 'react'
import CarDetailsComponent from '../../components/CarDetails/car-details'
import { fetchDistance, fetchDirection } from '../../store/Distance/actions'
import { propagateErrorLinking } from '../../store/Error/actions'
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
    if (this.props.positionInVancouver) {
      Promise.all([
        this.props.dispatch(fetchDistance(currentPosition, marker.latlng)),
        this.props.dispatch(fetchDirection(currentPosition, marker.latlng))
      ])
    }
  }

  render() {
    return (
      <CarDetailsComponent
        marker={this.props.navigation.state.params.marker}
        distance={this.props.distance}
        onDirectionPress={this.showDirectionOnMap}
        positionInVancouver={this.props.positionInVancouver}
        onLinkingError={this.props.onLinkingError}
        errorLinking={this.props.errorLinking}/>
    )
  }
}

CarDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  positionInVancouver: PropTypes.bool.isRequired,
  onLinkingError: PropTypes.func.isRequired,
  errorLinking: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    distance: state.distance.distance,
    positionInVancouver: state.distance.positionInVancouver,
    errorLinking: state.errors.errorLinking
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onLinkingError: (message) => {
      dispatch(propagateErrorLinking(message))
    },
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)
