import React, { Component, PropTypes } from 'react'
import CarDetailsComponent from '../../components/CarDetails/car-details'
import { fetchDistance } from '../../store/Distance/actions'
import { connect } from 'react-redux'

class CarDetails extends Component {
  componentDidMount() {
    console.log('huhuhuhuhu')
    const {latitude, longitude} = this.props.navigation.state.params.currentPosition
    this.props.dispatch(fetchDistance(latitude, longitude))
  }

  render() {
    console.log('hahaha')
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
