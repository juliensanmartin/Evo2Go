import React, { Component, PropTypes } from 'react'
import MapComponent from '../../components/Map/map'
import { fetchCar2GoCars, fetchEvoCars, fetchBus } from '../../store/Car/actions'
import { getVisibleMarkers, isLoaded } from '../../store/Car/selectors'
import { connect } from 'react-redux'

class MapScreen extends Component {
  state = {
    timer: null
  }

  componentDidMount() {
    let timer = setInterval(() => {
      Promise.all([
        this.props.dispatch(fetchCar2GoCars()),
        this.props.dispatch(fetchEvoCars()),
        this.props.dispatch(fetchBus())
      ])
    }, 20000)
    this.setState({timer})

    // Duplicate here to run the first time and because the setInterval
    // does not work when in Debugging Mode on Chrome
    Promise.all([
      //this.props.dispatch(fetchCar2GoCars()),
      //this.props.dispatch(fetchEvoCars()),
      this.props.dispatch(fetchBus())
    ])
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
        direction={this.props.direction}/>
    )
  }
}

MapScreen.propTypes = {
  markers: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    markers: getVisibleMarkers(state),
    loading: !isLoaded(state),
    direction: state.distance.direction
  }
}

export default connect(mapStateToProps)(MapScreen)
