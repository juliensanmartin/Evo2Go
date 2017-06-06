import React, { Component, PropTypes } from 'react'
import { Icon } from 'react-native-elements'

export default class IconMarkerComponent extends Component {
  render() {
    const { type } = this.props.marker

    let color
    if (type==='evoPin') color='black'
    if (type==='car2GoPin') color='#00BCE2'
    return (
      <Icon type='ionicon' size={ 20 } name='ios-car' color={color}/>
    )
  }
}

IconMarkerComponent.propTypes = {
  marker: PropTypes.object.isRequired
}