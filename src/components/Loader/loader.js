import React, { Component, PropTypes } from 'react'
import { View, Animated } from 'react-native'
import Animation from 'lottie-react-native'

export default class LoaderComponent extends Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <View>
      { this.props.animating &&
        <Animation
          ref={animation => { this.animation = animation }}
          style={{
            width: 200,
            height: 200,
          }}
          loop={true}
          source={require('./assets/loader_ring.json')}
        />
      }
      </View>
    )
  }
}

LoaderComponent.propTypes = {
  animating: PropTypes.bool.isRequired
}
