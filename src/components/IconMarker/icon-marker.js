import React, { Component, PropTypes } from 'react'
import { Icon } from 'react-native-elements'

export default class IconMarkerComponent extends Component {
  render() {
    const { type } = this.props.navigation.state.params.marker

    let color
    if (type==='evoPin') color='#00a0e1'
    if (type==='car2GoPin') color='#00BCE2'
    return (
      <Icon type='ionicon' size={ 10 } name='model-s' color={color}/>
    )
  }
}

IconMarkerComponent.propTypes = {
  marker: PropTypes.object.isRequired
}
