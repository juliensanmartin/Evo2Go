import React, { Component, PropTypes } from 'react'
import { Icon, Badge } from 'react-native-elements'
import { View, Image } from 'react-native'

export default class IconMarkerComponent extends Component {
  constructor(props) {
  	super(props)
  	this.state = {...props}
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.coordinate) {
  	  return nextProps.coordinate.latitude != this.state.coordinate.latitude && nextProps.coordinate.longitude != this.state.coordinate.longitude
    }
    return true
  }

  render() {
    const { type, name, avlBikes } = this.props.marker

    // let icon = {
    //   color: 'black',
    //   name: 'ios-car'
    // }
    // if (type === 'evoPin') {
    //   icon.color='black'
    //   icon.name='ios-car'
    // }
    // if (type==='car2GoPin') {
    //   icon.color='#00BCE2'
    //   icon.name='ios-car'
    // }

    let marker = null
    if (type === 'Bus') {
      marker = <Badge value={name} containerStyle={{ backgroundColor: '#104f86'}} textStyle={{ color: '#FFDD33' }}/>
    } else if (type === 'Evo') {
      marker = <Image source={require('../assets/evo.png')} style={{width: 40, height: 40}}/>
    } else if (type === 'Mobi Bike') {
      marker = <Badge value={avlBikes} containerStyle={{ backgroundColor: '#008ABF'}} textStyle={{ color: '#ffffff' }}/>
    } else if (type === 'Modo') {
      marker = <Image source={require('../assets/modo.png')} style={{width: 40, height: 40}}/>
    } else {
      marker = <Image source={require('../assets/car2go.png')} style={{width: 30, height: 30}}/>
      //marker = <Icon type='ionicon' size={ 30 } name={icon.name} color={icon.color}/>
    }

    return (
      <View>
        {marker}
      </View>
    )
  }
}

IconMarkerComponent.propTypes = {
  marker: PropTypes.object.isRequired
}
