import React, { Component, PropTypes } from 'react'
import MapComponent from '../../components/Map/map'
import { fetchVisibleCars, updateRegion, activateLoader } from '../../store/Car/actions'
import { checkPositionInVancouver, resetDirection } from '../../store/Distance/actions'
import { getVisibleMarkers, isLoaded, getRegionMarkers } from '../../store/Car/selectors'
import { connect } from 'react-redux'

class MapScreen extends Component {
  state = {
    timer: null
  }

  componentDidMount() {
    let timer = setInterval(() => {
        this.props.dispatch(fetchVisibleCars())
    }, 30000)
    this.setState({timer})

    // Duplicate here to run the first time and because the setInterval
    // does not work when in Debugging Mode on Chrome
    this.props.dispatch(fetchVisibleCars())
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer)
    this.props.dispatch(resetDirection())
  }

  render() {
    return (
      <MapComponent
        markers={this.props.markers}
        loading={this.props.loading}
        navigation={this.props.navigation}
        direction={this.props.direction}
        onRegionChangeComplete={this.props.onRegionChangeComplete}
        onRegionChange={this.props.onRegionChange}
        onPositionFetched={this.props.onPositionFetched}
        positionInVancouver={this.props.positionInVancouver}
        errorApi={this.props.errorApi}/>
    )
  }
}

MapScreen.propTypes = {
  markers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  onRegionChangeComplete: PropTypes.func.isRequired,
  onRegionChange: PropTypes.func.isRequired,
  onPositionFetched: PropTypes.func.isRequired,
  positionInVancouver: PropTypes.bool.isRequired,
  errorApi: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    markers: getRegionMarkers(state),
    loading: !isLoaded(state),
    direction: state.distance.direction,
    positionInVancouver: state.distance.positionInVancouver,
    errorApi: state.errors.errorApi,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onRegionChangeComplete: (region) => {
      dispatch(updateRegion(region))
    },
    onRegionChange: () => {
      dispatch(activateLoader())
    },
    onPositionFetched: (coord) => {
      dispatch(checkPositionInVancouver(coord))
    },

    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
