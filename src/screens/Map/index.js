import React, { Component, PropTypes } from 'react'
import MapComponent from '../../components/Map/map'
import { fetchCar2GoCars, fetchEvoCars } from '../../store/Car/actions'
import { getVisibleMarkers, isLoaded } from '../../store/Car/selectors'
import { connect } from 'react-redux'

class MapScreen extends Component {
  componentDidMount() {
		//const { dispatch } = this.props

    // Fetch api every 15 seconds
    this.interval = setInterval(this.fetchCars, 5000)
  }

  fetchCars() {
    const { dispatch } = this.props
    console.log('HUHUHUHUHUHUHU')
    Promise.all([
      dispatch(fetchCar2GoCars()),
      dispatch(fetchEvoCars())
    ])
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <MapComponent
        markers={this.props.markers}
        loading={this.props.loading}
        navigation={this.props.navigation}/>
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
    loading: !isLoaded(state)
  }
}

export default connect(mapStateToProps)(MapScreen)
