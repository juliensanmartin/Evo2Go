import React, { Component, PropTypes } from 'react'
import CarDetailsComponent from '../../components/CarDetails/car-details'
import { fetchDistance } from '../../store/Distance/actions'
import { connect } from 'react-redux'

class CarDetails extends Component {
  componentWillMount() {
    const {currentPosition, marker} = this.props.navigation.state.params
    this.props.dispatch(fetchDistance(currentPosition, marker.latlng))
  }

  render() {
    console.log(this)
    return (
      <CarDetailsComponent
        marker={this.props.navigation.state.params.marker}
        distance={this.props.distance}/>
    )
  }
}

CarDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    distance: state.distance
  }
}

export default connect(mapStateToProps)(CarDetails)
