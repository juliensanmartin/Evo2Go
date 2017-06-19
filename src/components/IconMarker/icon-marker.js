import React, { Component, PropTypes } from 'react'
import { Icon } from 'react-native-elements'

export default class IconMarkerComponent extends Component {
  render() {
    const { type } = this.props.marker

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
    if (type==='busPin') {
      icon.color='#104f86'
      icon.name='ios-bus'
    }

    return (
      <Icon type='ionicon' size={ 30 } name={icon.name} color={icon.color}/>
    )
  }
}

IconMarkerComponent.propTypes = {
  marker: PropTypes.object.isRequired
}
