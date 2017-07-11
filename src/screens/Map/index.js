import React, { Component, PropTypes } from 'react'
import MapComponent from '../../components/Map/map'
import { fetchVisibleCars, updateRegion } from '../../store/Car/actions'
import { checkPositionInVancouver } from '../../store/Distance/actions'
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
  }

  render() {
    return (
      <MapComponent
        markers={this.props.markers}
        loading={this.props.loading}
        navigation={this.props.navigation}
        direction={this.props.direction}
        onRegionChange={this.props.onRegionChange}
        onPositionFetched={this.props.onPositionFetched}
        positionInVancouver={this.props.positionInVancouver}/>
    )
  }
}

MapScreen.propTypes = {
  markers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  onRegionChange: PropTypes.func.isRequired,
  onPositionFetched: PropTypes.func.isRequired,
  positionInVancouver: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    markers: getRegionMarkers(state),
    loading: !isLoaded(state),
    direction: state.distance.direction,
    positionInVancouver: state.distance.positionInVancouver
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onRegionChange: (region) => {
      dispatch(updateRegion(region))
    },
    onPositionFetched: (coord) => {
      dispatch(checkPositionInVancouver(coord))
    },
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
