import React, { Component, PropTypes } from 'react';
import CarDetailsComponent from '../../components/CarDetails/car-details';
import { fetchCarDetails } from '../../store/Car/actions';
import { getCarDetails } from '../../store/Car/selectors';
import { connect } from 'react-redux';

class CarDetailsScreen extends Component {
  componentDidMount() {
		const { dispatch, navigation } = this.props
    console.log('componentWillMount ', navigation.state.params)
    Promise.all([
      dispatch(fetchCarDetails(navigation.state.params.id)),
    ]);
  }

  render() {
    console.log('car ; ',this.props.car)
    return (
      <CarDetailsComponent car={this.props.car}/>
    );
  }
}

CarDetailsScreen.propTypes = {
  car: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    car: getCarDetails(state)
  }
}

export default connect(mapStateToProps)(CarDetailsScreen)
