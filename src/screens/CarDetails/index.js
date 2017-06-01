import React, { Component, PropTypes } from 'react';
import CarDetailsComponent from '../../components/CarDetails/car-details';
import { fetchCarDetails } from '../../store/Car/actions';
import { getCarDetails, isCarFetch } from '../../store/Car/selectors';
import { connect } from 'react-redux';

class CarDetailsScreen extends Component {
  componentDidMount() {
		const { dispatch, navigation } = this.props
    dispatch(fetchCarDetails(navigation.state.params.id))
  }

  render() {
    return (
      <CarDetailsComponent car={this.props.markers} loading={this.props.loading}/>
    );
  }
}

CarDetailsScreen.propTypes = {
  id: PropTypes.string.isRequired,
  car: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    car: getCarDetails(state),
    loading: !isCarFetch(state)
  }
}

export default connect(mapStateToProps)(CarDetailsScreen)
