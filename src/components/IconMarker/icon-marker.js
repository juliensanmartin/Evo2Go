import React, { Component, PropTypes } from 'react'
import { Icon, Badge } from 'react-native-elements'
import { View } from 'react-native'

export default class IconMarkerComponent extends Component {
  constructor(props) {
  	super(props)
  	this.state = {...props}
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.coordinate.latitude && nextProps.coordinate.longitude) {
  	  return nextProps.coordinate.latitude != this.state.coordinate.latitude && nextProps.coordinate.longitude != this.state.coordinate.longitude
    }
    return true
  }

  render() {
    const { type, name } = this.props.marker

    let icon = {
      color: 'black',
      name: 'ios-car'
    }
    if (type === 'evoPin') {
      icon.color='black'
      icon.name='ios-car'
    }
    if (type==='car2GoPin') {
      icon.color='#00BCE2'
      icon.name='ios-car'
    }

    let marker = null
    if (type === 'busPin') {
      marker = <Badge value={name} containerStyle={{ backgroundColor: '#104f86'}}/>
    } else {
      marker = <Icon type='ionicon' size={ 30 } name={icon.name} color={icon.color}/>
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
