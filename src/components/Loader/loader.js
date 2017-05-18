import React, { Component, PropTypes } from 'react'
import { Animated } from 'react-native'
import Animation from 'lottie-react-native'

export default class LoaderComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        progress: new Animated.Value(0),
      };
    }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000,
    }).start();
  }

  render() {
    return (
      <Animation
        progress={this.state.progress}
        style={{
          width: 200,
          height: 200,
        }}
        loop={true}
        source={require('./assets/loading.json')}
      />
    )
  }
}
