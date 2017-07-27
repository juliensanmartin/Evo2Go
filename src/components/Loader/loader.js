import React, { Component, PropTypes } from 'react'
import { View, Animated } from 'react-native'
import Animation from 'lottie-react-native'

export default class LoaderComponent extends Component {
  componentDidMount() {
    this.animation.play()
  }

  componentDidUpdate() {
    if (this.animation) this.animation.play()
  }

  render() {
    return (
      <View>
      { this.props.animating &&
        <Animation
          ref={animation => { this.animation = animation }}
          style={{
            width: '100%',
            height: 150
          }}
          loop={true}
          source={require('./assets/progress_bar.json')}
        />
      }
      </View>
    )
  }
}

LoaderComponent.propTypes = {
  animating: PropTypes.bool.isRequired
}
